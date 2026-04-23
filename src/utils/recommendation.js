import { subModelMap } from '../data/models'

const toPercent = (n) => Math.max(0, Math.min(100, Math.round(n)))
const budgetBoost = { low: 4, mid: 9, high: 14 }

function normalizeRanks(scoreObj) {
  const entries = Object.entries(scoreObj)
  const max = Math.max(...entries.map(([, value]) => value))

  return entries
    .map(([id, score]) => ({
      id,
      score,
      fit: toPercent((score / max) * 100),
    }))
    .sort((a, b) => b.score - a.score)
}

export function buildRecommendation(input) {
  const {
    budget,
    recurring,
    inventory,
    marketing,
    speed,
    control,
    tech,
    risk,
    goal,
  } = input

  const coreScores = {
    subscription:
      recurring * 2.5 +
      control * 1.7 +
      marketing * 1.2 +
      budgetBoost[budget] +
      (tech ? 6 : 2) +
      (goal === 'predictable-income' ? 18 : 0),

    affiliate:
      speed * 2.1 +
      marketing * 2.4 +
      (budget === 'low' ? 15 : budget === 'mid' ? 9 : 5) +
      (inventory <= 2 ? 11 : 4) +
      (goal === 'minimum-risk' ? 18 : 0),

    dropshipping:
      speed * 2.4 +
      risk * 2.0 +
      marketing * 1.8 +
      (budget === 'low' ? 13 : budget === 'mid' ? 8 : 4) +
      (inventory <= 2 ? 12 : 3) +
      (goal === 'test-fast' ? 18 : 0),

    privateLabel:
      control * 2.6 +
      inventory * 1.9 +
      recurring * 1.2 +
      (budget === 'high' ? 16 : budget === 'mid' ? 8 : 2) +
      (tech ? 5 : 1) +
      (goal === 'brand-equity' ? 18 : 0),
  }

  const subScores = {
    sub_curation:
      recurring * 2.3 + control * 1.4 + marketing * 1.1 + (budget !== 'low' ? 9 : 3),
    sub_replenishment:
      recurring * 2.7 + inventory * 1.5 + (tech ? 7 : 3) + (goal === 'predictable-income' ? 8 : 0),

    aff_content:
      marketing * 2.6 + speed * 1.4 + (tech ? 6 : 2) + (goal === 'minimum-risk' ? 8 : 0),
    aff_coupon:
      speed * 2.2 + risk * 1.3 + (budget === 'low' ? 9 : 5) + (goal === 'minimum-risk' ? 6 : 0),

    drop_general:
      speed * 2.5 + risk * 2.1 + marketing * 1.6 + (budget === 'low' ? 9 : 6),
    drop_pod:
      speed * 2.0 + control * 1.6 + marketing * 2.0 + (tech ? 6 : 2),

    pl_premium:
      control * 2.7 + inventory * 2.0 + (budget === 'high' ? 12 : 5) + (goal === 'brand-equity' ? 8 : 0),
    pl_niche:
      control * 2.3 + recurring * 1.5 + marketing * 1.4 + (goal === 'brand-equity' ? 10 : 0),
  }

  const rankedCore = normalizeRanks(coreScores)
  const rankedSub = normalizeRanks(subScores).map((entry) => ({
    ...entry,
    parentId: subModelMap[entry.id]?.parentId,
  }))

  const topCore = rankedCore[0]
  const rankedSubForTopCore = rankedSub.filter((entry) => entry.parentId === topCore.id)
  const topSub = rankedSubForTopCore[0] ?? rankedSub[0]

  return {
    rankedCore,
    rankedSub,
    rankedSubForTopCore,
    topCore,
    topSub,
  }
}

export function rationaleForCore(modelId) {
  const reasons = {
    subscription: [
      'High recurring-revenue preference aligns with retention-driven growth.',
      'Your profile supports lifecycle systems and customer repeat behavior.',
      'Strong long-term fit when compounding LTV is a priority.',
    ],
    affiliate: [
      'Fast-launch + low-operations profile matches referral-led execution.',
      'Marketing/content strength increases conversion probability.',
      'Lean risk profile fits commission-based monetization.',
    ],
    dropshipping: [
      'Your inputs prioritize rapid testing and market responsiveness.',
      'Lower inventory commitment fits early-stage uncertainty.',
      'Best for teams willing to iterate creatives and offers quickly.',
    ],
    privateLabel: [
      'High brand-control priority points to owned-product strategy.',
      'You can handle deeper operations for stronger margin potential.',
      'Best for building long-term defensibility and brand equity.',
    ],
  }

  return reasons[modelId] ?? ['This model aligns with your startup profile.']
}

export function rationaleForSubModel(subModelId) {
  const reasons = {
    sub_curation: [
      'Works well when novelty and storytelling can drive monthly engagement.',
      'Useful for lifestyle categories with discovery behavior.',
    ],
    sub_replenishment: [
      'Ideal for frequently consumed essentials where convenience wins.',
      'Better retention mechanics through utility-led repurchase.',
    ],
    aff_content: [
      'Strong choice when SEO and authority content are your growth assets.',
      'Compounds over time with evergreen intent traffic.',
    ],
    aff_coupon: [
      'Useful for quick traction in price-sensitive buyer segments.',
      'Best when you can aggregate and distribute deals rapidly.',
    ],
    drop_general: [
      'Optimized for broad testing and quick winner extraction.',
      'Works for teams prioritizing speed over deep brand control.',
    ],
    drop_pod: [
      'Great for creator-led brands with custom product angles.',
      'Lower operational overhead while maintaining perceived uniqueness.',
    ],
    pl_premium: [
      'Fit for founders targeting premium positioning and quality differentiation.',
      'Supports stronger gross margin when execution quality is high.',
    ],
    pl_niche: [
      'Strong for community-first brands with specific audience identity.',
      'Enables defensibility via specialized positioning.',
    ],
  }

  return reasons[subModelId] ?? ['This sub-model matches your current profile.']
}
