export interface ServiceImage {
  id: string
  service: number
  image: string
}

export interface ServiceFeature {
  id: string
  service: number
  key: string
  value: string
}

export interface Service {
  id: string
  title: string
  description: string
  thumbnail: string
  slug: string
  icon : string
  is_active: boolean
  created_at: string
  service_images: ServiceImage[]
  service_features: ServiceFeature[]
}