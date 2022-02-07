export interface RoadmapNodeData {
  order?: number
  period: string // i18n key ex: Q1 2022
  title?: string // i18n key
  content: string // i18n key
  active?: boolean // current period
}

export const ROADMAP_NODES: RoadmapNodeData[] = [
  {
    order: 1,
    period: 'home.roadmap.node.1.period',
    content: 'home.roadmap.node.1.content',
    active: true,
  },
  {
    order: 2,
    period: 'home.roadmap.node.2.period',
    content: 'home.roadmap.node.2.content',
  },
  {
    order: 3,
    period: 'home.roadmap.node.3.period',
    content: 'home.roadmap.node.3.content',
  },
  {
    order: 4,
    period: 'home.roadmap.node.4.period',
    content: 'home.roadmap.node.4.content',
  },
]
