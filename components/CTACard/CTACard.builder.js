import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyCTACard = dynamic(async () => {
    return (await import('./CTACard')).default
  })

Builder.registerComponent(LazyCTACard, {
    name: 'CTA Card',
    inputs: [
        { name: 'bgColor', type: 'string' },
        { name: 'heading', type: 'string' },
        { name: 'span', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'cta', type: 'string' },
    ]
})