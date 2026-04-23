export const coreModels = [
  {
    id: 'subscription',
    name: 'Subscription Commerce',
    summary: 'Predictable recurring revenue from repeat deliveries or membership access.',
    bestFor: ['Retention-focused brands', 'Long-term LTV growth', 'Stable cash flow planning'],
    executionSteps: [
      'Define a clear monthly value proposition and renewal reason.',
      'Build onboarding and reminder flows to reduce early churn.',
      'Track cohort retention and upgrade paths every month.',
      'Add referral or loyalty loops to compound retention.',
    ],
    riskWatchouts: [
      'Churn spikes from weak onboarding.',
      'Fulfillment inconsistency damages trust.',
      'Discount-heavy acquisition can hurt margins.',
    ],
    kpis: ['Monthly Recurring Revenue', 'Churn Rate', 'Average Order Frequency'],
    subModelIds: ['sub_curation', 'sub_replenishment'],
  },
  {
    id: 'affiliate',
    name: 'Affiliate Commerce',
    summary: 'Revenue through referral commissions with low operational overhead.',
    bestFor: ['Fast launch teams', 'Content-driven founders', 'Low capital experimentation'],
    executionSteps: [
      'Choose a niche where trust and advice influence buying decisions.',
      'Create SEO and comparison content for high-intent keywords.',
      'Partner with reliable programs and diversify commission sources.',
      'Optimize CTR and conversion across content funnels.',
    ],
    riskWatchouts: [
      'Platform algorithm dependency.',
      'Commission cuts by partner programs.',
      'Weak authority can reduce conversion quality.',
    ],
    kpis: ['Content-to-Click Rate', 'Affiliate Conversion Rate', 'Commission per Visitor'],
    subModelIds: ['aff_content', 'aff_coupon'],
  },
  {
    id: 'dropshipping',
    name: 'Dropshipping',
    summary: 'Launch quickly with supplier fulfillment and minimal inventory ownership.',
    bestFor: ['Rapid product testing', 'Low upfront risk', 'Ad-creative iteration'],
    executionSteps: [
      'Start with narrow winning categories and clear target persona.',
      'Validate with small-budget ad tests and rapid creative iteration.',
      'Audit supplier reliability before scaling ad spend.',
      'Move winners to stronger logistics or branded packaging.',
    ],
    riskWatchouts: [
      'Supplier delays and quality inconsistency.',
      'Thin margins with high ad costs.',
      'Refund spikes from poor expectation-setting.',
    ],
    kpis: ['Ad ROAS', 'Refund Rate', 'Average Shipping Time'],
    subModelIds: ['drop_general', 'drop_pod'],
  },
  {
    id: 'privateLabel',
    name: 'Private Label D2C',
    summary: 'Own product, brand perception, and margin structure end-to-end.',
    bestFor: ['Brand-builders', 'Higher moat ambition', 'Margin-conscious growth'],
    executionSteps: [
      'Validate demand using small sample batches before scaling inventory.',
      'Invest in differentiated packaging and positioning.',
      'Build repeat revenue through bundles and post-purchase flows.',
      'Use retention and community strategy for defensibility.',
    ],
    riskWatchouts: [
      'Inventory lock-in from poor demand forecasts.',
      'High initial brand and packaging costs.',
      'Longer time to profitability than leaner models.',
    ],
    kpis: ['Gross Margin %', 'Repeat Purchase Rate', 'Contribution Margin'],
    subModelIds: ['pl_premium', 'pl_niche'],
  },
]

export const subModels = [
  {
    id: 'sub_curation',
    parentId: 'subscription',
    name: 'Curation Subscription Box',
    summary: 'Monthly curated packs for discovery-led categories like beauty, snacks, or hobbies.',
  },
  {
    id: 'sub_replenishment',
    parentId: 'subscription',
    name: 'Replenishment Subscription',
    summary: 'Auto-refill essentials model for products with repeat consumption cycles.',
  },
  {
    id: 'aff_content',
    parentId: 'affiliate',
    name: 'Content Affiliate Engine',
    summary: 'SEO, reviews, and educational content that converts long-tail buyer intent.',
  },
  {
    id: 'aff_coupon',
    parentId: 'affiliate',
    name: 'Coupon & Deals Affiliate',
    summary: 'Deal-led affiliate model optimized for high intent but price-sensitive traffic.',
  },
  {
    id: 'drop_general',
    parentId: 'dropshipping',
    name: 'General Store Testing',
    summary: 'Fast multi-product testing to identify profitable winners quickly.',
  },
  {
    id: 'drop_pod',
    parentId: 'dropshipping',
    name: 'Print-On-Demand Dropshipping',
    summary: 'Creator-led customized products with no inventory holding.',
  },
  {
    id: 'pl_premium',
    parentId: 'privateLabel',
    name: 'Premium Private Label',
    summary: 'Higher ASP product strategy focused on quality, branding, and premium positioning.',
  },
  {
    id: 'pl_niche',
    parentId: 'privateLabel',
    name: 'Niche Community Brand',
    summary: 'Tightly focused category brand with strong audience affinity and repeat demand.',
  },
]

export const coreModelMap = Object.fromEntries(coreModels.map((model) => [model.id, model]))
export const subModelMap = Object.fromEntries(subModels.map((model) => [model.id, model]))
export const subModelsByCore = coreModels.reduce((acc, model) => {
  acc[model.id] = subModels.filter((sub) => sub.parentId === model.id)
  return acc
}, {})
