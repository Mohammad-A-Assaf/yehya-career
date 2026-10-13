"use client";

import React from 'react'

interface PanelProps {
  children: React.ReactNode;
}

interface SectionProps {
  title_goal: string[],
  goals: string[],
}

interface MilestoneCardsProps {
  title: string,
  description: string,
  section: SectionProps[],
}

function Panel ({children}:PanelProps) {
  return <section>{children}</section>
}

function GoalCard({title, description, section}: MilestoneCardsProps) {
  return (
    <section>
      <ol>
      <li><strong>{title}</strong></li>
      <span><p>{description}</p>
      {section.map(s => (
      <>
        <h1>{s.title_goal}</h1>
        {s.goals.map(goalText =>(
          <div>
          <input type='checkbox' id='check'/>
          <label htmlFor='check'>
          {goalText}
          </label>
          </div>
        ))}
        </>
      ))}
      </span>
      </ol>
    </section>
  );
}

const goal = [
  {
    id:"prep", 
    title:"Prepare",  
    description:"Build a frictionless professional brand that bypasses automated resume filters and instantly proves to recruiters that you can write clean, production-ready code.", 
  
    section: [
      {
      title_goal:["GitHub Readmes"],
      goals: ["Add a 2-sentence summary", "Technology stack list", "OOP", "REST APIs", "Git", "CI/CD" ] 
      }
    ]
    }, 
    

  {
    id:"prac", 
    title:"Practice",  
    description:"Master the exact technical patterns and behavioral frameworks required to survive entry-level coding screenings and team interviews.", 
  
    section: [
      {
        title_goal:["LeetCode Core", "Engineering STAR Stories"],
        goals:["Arrays", 
          "Strings", 
          "Hash Maps", 
          "resolved a Git merge conflict", 
          " fixed a bug under pressure."],
        }
        ]
},

   
  {
    id:"app", 
    title:"Apply", 
    description:"Maximize your visibility by combining daily automated job applications with direct, targeted outreach to engineering teams.", 
  section: [ 
    {
      title_goal:["24-Hour Job Alerts", "Direct Engineering Inbound Notes:"],
  goals:["Set up LinkedIn alerts for Junior Software Engineer", 
    " Find an Engineering Manager", 
    " send a 3-sentence note with your portfolio link."],
}]
  }
]

export default function Page() {
  return (
    goal.map(g => (
    <GoalCard 
    key= {g.id}
    title= {g.title}
    description= {g.description}
    section={g.section}
    />)
    )
  )}
