"use client";

import {GoalCard} from '../componenet/goalcard';
import { goalMilestone } from '../componenet/goalcard';

export default function Page() {

  return (
    goalMilestone.map(g => (
      <GoalCard 
      key= {g.keyId}
      milestone= {g.milestone}
      description= {g.description}
      section={g.section}
      />
    )
    )
  )}
