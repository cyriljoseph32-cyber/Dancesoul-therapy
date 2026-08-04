import type { Metadata } from 'next'
import { wa, schedule, privateFormats, prices } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Sessions — Group Classes & Private Movement Therapy',
  description:
    'Small-group movement therapy in Koh Samui, all levels, from 400 THB — six evenings a week in Lamai and Chaweng. Private sessions in studio from 800 THB, or at your villa from 1,000 THB.',
}

export default function Experiences() {
  return (
    <>
      <section className="page-hero">
        <h1>Group classes.</h1>
        <p>
          Six sessions a week in Lamai and Chaweng. Small groups, all levels —
          {' '}
          {prices.group}.
        </p>
      </section>

      <section className="concept" data-reveal>
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>Ten people, one hour, no level.</h2>
        </div>
        <p className="lead">
          We keep groups to ten at most, so the room stays intimate and safe.
          The session follows the DanceSoul arc — arrive, awaken, express,
          release, integrate — guided by breath and music, never choreography.
          Wear something comfortable, bring water. Everything else is provided.
        </p>
      </section>

      <section className="offers" data-reveal>
        <div className="section-head">
          <p className="eyebrow">Weekly schedule</p>
          <h2>Find your evening.</h2>
        </div>
        <div className="sched">
          {schedule.map(([day, time, loc]) => (
            <div key={day} className="sched-row">
              <span className="sched-day">{day}</span>
              <span className="sched-time">{time}</span>
              <span className="sched-loc">{loc}</span>
            </div>
          ))}
        </div>
        <p className="fineprint">
          Drop-in {prices.groupDropIn} · kids class Saturday morning · confirm
          your spot on WhatsApp — places are limited to 10.
        </p>
      </section>

      <section className="concept" id="private" data-reveal>
        <div className="section-head">
          <p className="eyebrow">Two formats</p>
          <h2>Private: studio, or your own space.</h2>
        </div>
        <p className="lead">
          A transition, a block, a season of burnout — or simply the wish for
          undivided attention. In private, the arc adapts to you: deeper where
          you need depth, slower where you need time.
        </p>
        <div className="offer-grid two" style={{ marginTop: '2.4rem' }}>
          {privateFormats.map(([t, d, p]) => (
            <article key={t} className="offer">
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="price">{p}</span>
            </article>
          ))}
        </div>
        <p className="fineprint">
          Sessions with Hannah, by appointment · packs of 5 available · couples
          and duo sessions on request.
        </p>
      </section>

      <section className="final-cta">
        <h2>Reserve your spot.</h2>
        <p>Answered personally, usually within the hour.</p>
        <a
          href={wa("Hi! I'd like to reserve a spot in a group class 🙏")}
          className="btn btn-light"
          target="_blank"
          rel="noreferrer"
        >
          Reserve on WhatsApp
        </a>
      </section>
    </>
  )
}
