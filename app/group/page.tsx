import type { Metadata } from 'next'
import Link from 'next/link'
import { wa, schedule } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Group Movement Therapy Classes — Lamai & Chaweng',
  description:
    'Small-group movement therapy classes in Koh Samui, all levels, from 400 THB. Six sessions a week in Lamai and Chaweng, groups of 10 max.',
}

export default function Group() {
  return (
    <>
      <section className="page-hero">
        <h1>Group classes.</h1>
        <p>
          Six sessions a week in Lamai and Chaweng. Small groups, all levels —
          from 400 THB.
        </p>
      </section>

      <section className="concept">
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

      <section className="offers">
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
          Drop-in 400 THB · kids class Saturday morning · confirm your spot on
          WhatsApp — places are limited to 10.
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
        <p style={{ marginTop: '1.5rem' }}>
          <Link href="/private" className="btn btn-ghost">
            Prefer a private session?
          </Link>
        </p>
      </section>
    </>
  )
}
