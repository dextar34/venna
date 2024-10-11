import React from 'react'
import Container from '../components/layer/Container'
import cn from '../lib/cn'

const AboutUS = () => {
  return (
    <div className={cn('mt-24 mx-2')}>
      <Container className={cn('text-xl text-justify font-medium text-gray-600 leading-9',
      'md:text-3xl md:leading-[55px]'
      )}>
        <p>Established in <span className='font-bold'>2020</span>, Vienna Apparel was founded with a clear vision: to bring premium quality fashion at affordable prices to those who value both style and comfort. Since then, we've grown into a brand known for offering versatile, trendsetting clothing that fits every occasion and personality.</p>
        <p>At Vienna Apparel, we believe fashion is more than just clothing—it's an expression of identity, confidence, and creativity. Whether you're dressing up for a special event or looking for stylish everyday wear, our collections are designed to inspire. We source the best materials and work with responsible manufacturers to ensure our products are both high-quality and ethically produced.</p>
        <p className='font-bold'>Our goal is simple to empower you to express your unique style, without compromise.</p>
        <p>Join us on this exciting fashion journey—where premium quality meets affordability—and be a part of the Vienna Apparel story!</p>
      </Container>
    </div>
  )
}

export default AboutUS
