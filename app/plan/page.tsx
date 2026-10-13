"use cleint";

import React from 'react'

interface PanelProps {
  children: React.ReactNode;
}

function Panel ({children}:PanelProps) {
  return <section>{children}</section>
}

function MilestoneCardsProps {
  title: string,
  description: string,

}



const page = () => {
  return (
    <>
      <ol>
        <li>Prepare: 
          <span>
            <p>Build a frictionless professional brand that bypasses automated resume filters and instantly proves to recruiters that you can write clean, production-ready code.</p>
            <ul>
              <li>Clean Up GitHub Readmes: 
                <ul className="List-none pl-5">
                  <li list-style-type="none">
                    <div>
                      <input type="checkbox" id="summary"/>
                      <label htmlFor="summary"> Add a 2-sentence summary.</label>
                    </div>
                    <div>
                      <input type="checkbox" id="stack"/>
                      <label htmlFor="stack"> Technology stack list.</label>
                    </div>
                    <div>
                      <input type="checkbox" id="repo"/>
                      <label htmlFor="repo"> Run Local section to your top 2 repositories.</label>
                    </div>
                  </li>
                </ul>
              </li>

              <li> Match CV to ATS Keywords: 
                <ul style={{listStyleType: 'none', paddingLeft: 20}}>
                  <li list-style-type="none">
                    <div>
                      <input type="checkbox" id="oop"/>
                      <label htmlFor="oop"> OOP.</label>
                    </div>
                    <div>
                      <input type="checkbox" id="api"/>
                      <label htmlFor="api"> Rest APIs</label>
                    </div>
                    <div>
                      <input type="checkbox" id="git"/>
                      <label htmlFor="git"> Git.</label>
                    </div>
                    <div>
                      <input type="checkbox" id="ci/cd"/>
                      <label htmlFor="ci/cd"> CI/CD.</label>
                    </div>
                  </li>
                </ul>
              </li>  
            </ul>
          </span>
        </li>

        <li>Practice: 
          <span>
            <p>Master the exact technical patterns and behavioral frameworks required to survive entry-level coding screenings and team interviews.</p>
            <ul>
              <li> Drill LeetCode Core: : 
                <ul className="List-none pl-5">
                  <li list-style-type="none">
                    <div>
                      <input type="checkbox" id="array"/>
                      <label htmlFor="array"> Arrays.</label>
                    </div>
                    <div>
                      <input type="checkbox" id="string"/>
                      <label htmlFor="string"> Strings.</label>
                    </div>
                    <div>
                      <input type="checkbox" id="maps"/>
                      <label htmlFor="maps"> Hash Maps.</label>
                    </div>
                  </li>
                </ul>
              </li>

              <li>Draft Two Engineering Stories:</li>
              <ul style={{listStyleType: 'none', paddingLeft: 20}}>
                <li list-style-type="none">
                  <div>
                    <input type="checkbox" id="merge"/>
                    <label htmlFor="merge"> Resolved a Git merge conflict.</label>
                  </div>
                  <div>
                    <input type="checkbox" id="bug"/>
                    <label htmlFor="bug"> Fixed a bug under pressure.</label>
                  </div>
                </li>
              </ul>
            </ul>
          </span>
        </li>


        <li>Apply: 
          <span>
            <p>Maximize your visibility by combining daily automated job applications with direct, targeted outreach to engineering teams.</p>
            <ul>
              <li> Configure 24-Hour Job Alerts:
                <ul className="List-none pl-5">
                  <li list-style-type="none">
                    <div>
                      <input type="checkbox" id="job"/>
                      <label htmlFor="job">  Set up LinkedIn alerts for "Junior Software Engineer".</label>
                    </div>
                  </li>
                </ul>
              </li>

              <li> Send Direct Engineering Inbound Notes:
                <ul className="List-none pl-5">
                  <li list-style-type="none">
                    <div>
                      <input type="checkbox" id="find"/>
                      <label htmlFor="find">  Find an Engineering Manager on LinkedIn.</label>
                    </div>
                    <div>
                      <input type="checkbox" id="send"/>
                      <label htmlFor="send"> send a 3-sentence note with your portfolio link.</label>
                    </div>
                  </li>
                </ul>
              </li>  
            </ul>
          </span>
        </li>
      </ol>
    </>
  )
}

export default page
