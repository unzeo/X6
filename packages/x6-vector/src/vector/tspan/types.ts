import {
  SVGCommonAttributes,
  SVGStyleAttributes,
  SVGPresentationAttributes,
  SVGConditionalProcessingAttributes,
} from '../types/attributes-core'

export interface SVGTSpanAttributes
  extends SVGCommonAttributes<SVGTSpanElement>,
    SVGStyleAttributes,
    SVGConditionalProcessingAttributes,
    SVGPresentationAttributes {
  x?: string | number
  y?: string | number
  dx?: string | number
  dy?: string | number
  rotate?: string | number
  textLength?: string | number
  lengthAdjust?: 'spacing' | 'spacingAndGlyphs'
}