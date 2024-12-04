
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Charanter {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Charanter = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';

console.table(strider);