import teamNumbers from '../content/team-numbers.json';
import members from '../content/members.json';
import subteams from '../content/subteams.json';

const counts = {
  members: new Set(members.people.map((person) => person.name.trim().toLowerCase())).size,
  subteams: subteams.teams.length,
};

export const numbers = teamNumbers.facts.map((fact) => ({
  label: fact.label,
  value: fact.source === 'members' ? counts.members : fact.source === 'subteams' ? counts.subteams : fact.value,
}));
