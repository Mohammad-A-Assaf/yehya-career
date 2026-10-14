"use client";

import React from 'react'

export interface PanelProps {
  children: React.ReactNode;
}

export function Panel ({children}:PanelProps) {
  return <section>{children}</section>
}

export interface MilestoneCardsProps {
  milestone: string,
  description: string,
  section: SectionProps[],
}


export interface SectionProps {
  keyId: string,
  goalId: string,
  title_goal: string,
  goals: string[],
}


export const goalMilestone = [
  {
    keyId : "prep",
    milestone: "Prepare",
    description: "Focus on building a strong foundation by aligning your professional brand with your target career goals.",
    section: [
      {
        keyId:"role",
        goalId:"role_goal",
        title_goal: "Target Role Definition:",
        goals: ["Research and select a specific job title that matches your skills and long-term career goals."]
      },

      {
        keyId:"action_0",
        goalId:"action_0_goal",
        title_goal: "Action:",
        goals: ["Review 5-10 job postings for your desired role and list the most frequently requested skills.", "Audit your existing experience against this list to identify and bridge any qualification gaps."," Rewrite past job descriptions using the X-Y-Z formula (Accomplished [X], as measured by [Y], by doing [Z])."]
      },
      
      {
        keyId:"cv",
        goalId:"cv_goal",
        title_goal: "CV Optimization:",
        goals: ["Tailor your resume to highlight relevant achievements and keywords that match your target role.", " Assemble a curated collection of your best work to visually demonstrate your capabilities."]    
      }
    ]   
  },

  {
    keyId : "prac",
    milestone: "Practice",
    description: "Sharpen your technical and soft skills while simulating real-world evaluation scenarios.",
    section: [
      {
        keyId:"skill",
        goalId:"skill_goal",
        title_goal: "Skill Strengthening:",
        goals: ["Dedicate structured time to mastering the core competencies of your chosen field."]
      },
      {
        keyId:"action_1",
        goalId:"action_1_goal",
        title_goal: "Action:",
        goals: ["Complete one advanced certification or mini-project that addresses a key weakness in your skillset.", "Spend 30 minutes daily practicing role-specific exercises (e.g., coding challenges, design prompts, or case studies).", "Record yourself answering behavioral questions using the STAR method (Situation, Task, Action, Result)."]
      },

      {
        keyId:"interview",
        goalId:"intreview_goal",
        title_goal: "Interview Preparation:",
        goals: [" Build confidence and clarity by rehearsing your responses to common interview questions."]
      }
    ]   
  },

  {
    keyId : "app",
    milestone: "Apply",
    description: "Execute a strategic job search by targeting the right opportunities and managing your pipeline.",
    section: [
      {
        keyId:"strat",
        goalId:"strat_goal",
        title_goal: "Strategic Exploration:",
        goals: ["Identify and track high-quality openings across relevant job boards and networks."]
      },
    
      {
        keyId:"action_2",
        goalId:"action_2_goal",
        title_goal: "Action:",
        goals: ["Set up automated job alerts on platforms like LinkedIn and Indeed using highly specific keywords.","Build a tracking spreadsheet to log company names, job titles, application dates, and contact persons.","Write a customizable cover letter template that allows you to easily swap out company-specific details."]
      },

      {
        keyId:"sub",
        goalId:"sub_goal",
        title_goal: "Application Submission:",
        goals: ["Submit tailored materials that clearly demonstrate your value to each specific employer."," Maintain momentum and show continued interest after submitting your application."]
      }

    ]   
  },
]


export function GoalCard({milestone, description, section}: MilestoneCardsProps) {
    return (
        <article>
          <div>
            <h1><strong>{milestone}</strong></h1>
            <p className="px-4">{description}</p>
          </div>
            {
              section.map(s=> (
                <div key={s.keyId} className='py-2'>
                  <ul>
                    <li><strong>{s.title_goal}</strong></li>
                  </ul>
                  <br/>
                  {
                    s.goals.map((goalText,index)=> (
                      <div key={s.goalId+index} className='px-4'>
                        <input type="checkbox" id={s.goalId+index}/>
                        <label htmlFor={s.goalId+index}>{goalText}</label>
                        </div>
                        )
                      )
                  }
                </div>
                )
              )
              }
        </article>
    )
}



