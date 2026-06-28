"use client";



import { Container } from "@/components/layout/container";

import { SectionShell } from "@/components/layout/section-shell";

import { Reveal } from "@/components/marketing/reveal";

import { SectionHeader } from "@/components/marketing/section-header";

import {

  TestimonialCarousel,

  type TestimonialItem,

  TestimonialNavCluster,

  TestimonialSlideCard,

} from "@/components/marketing/testimonials-showcase";



export function HomeTestimonialsSection({ items }: { items: readonly TestimonialItem[] }) {

  return (

    <SectionShell id="testimonials" size="default" className="bg-[var(--surface-muted)]">

      <Reveal>

        <Container>

          <TestimonialCarousel items={items}>

            {({ item, prev, next, index, count, goTo }) => (

              <div className="grid-layout-12 items-start gap-y-10 lg:gap-y-0">

                <div className="col-span-12 flex flex-col gap-8 lg:col-span-5">

                  <SectionHeader

                    eyebrow="Testimonials"

                    title="Trusted by product teams"

                    description="What clients say about working with our design and development team."

                  />

                  <TestimonialNavCluster

                    prev={prev}

                    next={next}

                    index={index}

                    count={count}

                    goTo={goTo}

                    className="border-t border-[var(--section-divider)] pt-8"

                  />

                </div>

                <div className="col-span-12 lg:col-span-7">

                  <TestimonialSlideCard item={item} live />

                </div>

              </div>

            )}

          </TestimonialCarousel>

        </Container>

      </Reveal>

    </SectionShell>

  );

}


