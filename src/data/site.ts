// Everything a visitor reads lives here. Facts come from the resume data and the repos;
// keep them in step with the resume, and never add a number that isn’t measured.

import type { ImageMetadata } from 'astro';
import streamlora from '../assets/work/streamlora.png';
import cipherlink from '../assets/work/cipherlink.png';
import dailyBrief from '../assets/work/daily-brief.png';
import ebbtide from '../assets/work/ebbtide.png';
import ghostline from '../assets/work/ghostline.png';
import rhea from '../assets/work/rhea.png';

export const person = {
  name: 'Nikhil Pawar',
  role: 'DevOps and cloud infrastructure engineer',
  email: 'nikhil.k.pawar.06@gmail.com',
  github: 'https://github.com/aimsotrash',
  linkedin: 'https://www.linkedin.com/in/nikhil-pawar0609',
  resume: '/Nikhil-Pawar-Resume.pdf',
  location: 'Seattle, WA',
  site: 'https://nikhil-pawar0609.github.io',
};

export const meta = {
  title: 'Nikhil Pawar, DevOps and cloud infrastructure engineer',
  description:
    "Nikhil Pawar ran the AWS account behind HP’s device-telemetry platform for three and a half years and is now an MS CS student at Northeastern in Seattle. Open to a Summer 2027 internship or a January–August 2027 co-op.",
};

export const hero = {
  sentence: 'DevOps and cloud infrastructure engineer. Three and a half years at HP, now in Seattle.',
  detail:
    'MS in Computer Science at Northeastern University. Open to a Summer 2027 internship or a January–\u2060August 2027 co-op.',
};

export const letter = [
  "I spent three and a half years at HP running the AWS account behind its commercial device-telemetry platform. Telemetry from millions of enterprise devices came in through Kinesis and landed in a petabyte-scale, five-tier lake on S3, Hive/RDS and Redshift. During device launches I provisioned EMR jobs for new sources as often as daily.",
  'I kept that account in Terraform and Terragrunt, built the Azure DevOps pipelines that shipped it from a git commit, wrote its IAM roles and policies from scratch, and took my turn on the production on-call rotation with CloudWatch alarms and PagerDuty.',
  'GDPR erasure used to mean pausing ingestion by hand, running MSCK REPAIR passes and restarting deletion jobs that could sit failed all weekend. I rebuilt it as Airflow-orchestrated Python with automatic retries and run-state notifications. Turnaround went from up to a month to 48 hours, inside the two-week compliance window.',
  "Since January 2026 I’ve been studying for an MS in Computer Science at Northeastern in Seattle, and building systems that check their own work: a server that restarts itself, a forecaster that rolls back its own bad models, a messenger that doesn’t trust its own key server.",
  "I’m looking for a Summer 2027 internship or a January–August 2027 co-op in DevOps, cloud infrastructure, SRE or platform engineering, or in data and ML infrastructure.",
];

export const figures = [
  { value: '48 h', caption: 'GDPR erasure turnaround, down from up to a month' },
  { value: '3.5 years', caption: "running the AWS account behind HP’s device telemetry" },
];

export type Drawing = 'homelab' | 'self-healing';

export interface Project {
  id: string;
  name: string;
  kind: string;
  summary: string;
  stack: string;
  note?: string;
  code: string;
  live?: string;
  tryIt?: string;
  image?: ImageMetadata;
  drawing?: Drawing;
  alt: string;
}

export const projects: Project[] = [
  {
    id: 'homelab-infra',
    name: 'homelab-infra',
    kind: 'Private cloud',
    summary:
      'A private cloud on bare-metal Proxmox. Terraform builds VMs from a cloud-init template, k3s spans the machines over Tailscale with a GPU worker node, and Atlantis runs Terraform from pull requests. Argo CD delivers the workloads; Prometheus and Grafana watch the hardware.',
    stack: 'Proxmox · Terraform · cloud-init · k3s · Tailscale · Atlantis · Argo CD · GitHub Actions · Prometheus · Grafana',
    code: 'https://github.com/aimsotrash/homelab-infra',
    drawing: 'homelab',
    alt: 'Drawing of the homelab: a Proxmox host whose cloud-init template is cloned into k3s and services VMs, joined over Tailscale to a GPU worker node.',
  },
  {
    id: 'self-healing-infra',
    name: 'self-healing-infra',
    kind: 'Auto-remediation on AWS',
    summary:
      'An nginx server on EC2 that repairs itself. A health check reports to CloudWatch every minute; when nginx stops, or the instance goes quiet, an alarm invokes Lambda, which restarts nginx through Systems Manager. No SSH, no one paged. Terraform builds all of it, with IAM limited to one metric namespace and one instance.',
    stack: 'AWS EC2 · CloudWatch · Lambda · Systems Manager · IAM · Terraform · Python · Bash',
    code: 'https://github.com/aimsotrash/self-healing-infra',
    tryIt: '#top',
    drawing: 'self-healing',
    alt: 'Drawing of the NginxRunning metric dropping from 1 to 0, the nginx-down alarm firing, and the metric returning to 1 after the restart.',
  },
  {
    id: 'streamlora',
    name: 'StreamLoRA',
    kind: 'ML systems, in progress',
    summary:
      'A continual-learning forecaster for laptop telemetry, still in progress. It samples 38 signals from 8 sources every 5 seconds, scores every forecast against four baselines, detects drift, and promotes a new model only when it beats the one it would replace. On 3.3 hours of real telemetry, across four experiment arms: 306 promotions, 132 rejections and 35 automatic rollbacks.',
    stack: 'Python · SQLite · drift detection · conformal intervals · LoRA',
    note: 'Work in progress',
    code: 'https://github.com/aimsotrash/streamlora',
    image: streamlora,
    alt: "StreamLoRA’s adaptation dashboard: a timeline of drift, promotions, rejections and rollbacks above a decision log of model versions.",
  },
  {
    id: 'ebbtide',
    name: 'Ebbtide',
    kind: 'Memory for AI agents',
    summary:
      'Long-term memory for AI agents that forgets on purpose: an MCP server whose memories fade on a forgetting curve unless they are recalled. I replayed six memory policies on LongMemEval and LoCoMo. Keeping everything wins when you can afford it, and strengthening on recall beats plain LRU, modestly.',
    stack: 'Python · MCP · sentence-transformers · NumPy · SQLite · React',
    code: 'https://github.com/aimsotrash/Ebbtide',
    live: 'https://aimsotrash-engram.vercel.app',
    image: ebbtide,
    alt: "Ebbtide’s landing page: the headline “Agent memory that fades” with a recall button, a days-without-recall slider and a spaced-rule switch.",
  },
  {
    id: 'cipherlink',
    name: 'Cipherlink',
    kind: 'End-to-end encryption',
    summary:
      'A peer-to-peer messenger on MLS (RFC 9420) over WebRTC that treats its own key directory as untrusted: safety numbers to verify contacts, outgoing messages held when a key changes, per-file AES-256-GCM keys for attachments and an Argon2id-sealed local vault. 140 tests, including an adversarial-server suite.',
    stack: 'TypeScript · React · WebRTC · MLS · Node',
    code: 'https://github.com/aimsotrash/Cipherlink',
    image: cipherlink,
    alt: "Cipherlink’s verification dialog: a 60-digit safety number beside a QR code, with a field to paste the contact’s number.",
  },
  {
    id: 'daily-brief',
    name: 'Daily-Brief',
    kind: 'Search and retrieval',
    summary:
      'A self-hosted news briefing that answers only from articles it retrieved, with numbered citations. It clusters stories from 70+ RSS feeds into SQLite with FTS5 and runs on any OpenAI-compatible local model, or with no model at all. 316 tests.',
    stack: 'Python · FastAPI · SQLite FTS5 · local LLMs · RSS',
    code: 'https://github.com/aimsotrash/Daily-Brief',
    image: dailyBrief,
    alt: "Daily-Brief’s ask box, “Ask about today’s news”, above the day’s brief grouped by topic.",
  },
  {
    id: 'rhea',
    name: 'Rhea',
    kind: 'Sync and data safety',
    summary:
      'A local-first cycle tracker with partner sharing. I work on sync and data safety: a durable outbox with compare-and-swap, a hybrid-logical-clock merge, and row-level-security tests for Supabase.',
    stack: 'TypeScript · React · Supabase · IndexedDB',
    code: 'https://github.com/shravanibnikam/rhea-period-tracker',
    live: 'https://shravanibnikam.github.io/rhea-period-tracker/',
    image: rhea,
    alt: "Rhea’s partner view: switches that choose what a linked partner sees, beside the card that shows what Maya’s partner would see for a sample cycle.",
  },
  {
    id: 'ghostline',
    name: 'ghostline',
    kind: 'Game, hackathon',
    summary:
      'A tactical game about when to trust an AI teammate whose sensors can fail, built with Vatsalya Dabhi for Defense Tech Jam Seattle, where it won the Judges’ Choice Award. I made the 3D mission map, lighting, audio and tutorial.',
    stack: 'Three.js · GSAP · howler.js · Vite',
    note: 'Judges’ Choice Award',
    code: 'https://github.com/Vatsalya2003/ghostline',
    live: 'https://ghostline-eta.vercel.app',
    image: ghostline,
    alt: 'The ghostline title screen: GHOSTLINE in glowing teal capitals above a Begin mission button, on a dark mission map.',
  },
];

export const change = {
  heading: 'From pull request to VM',
  intro:
    'homelab-infra runs Terraform from pull requests. This is the path one change takes, from a branch to a new VM on the Proxmox host.',
  stages: [
    {
      when: 'On a branch',
      rows: [
        { what: 'Change the Terraform for the services VM', where: 'git' },
        { what: 'Open a pull request', where: 'GitHub' },
      ],
    },
    {
      when: 'In the pull request',
      rows: [
        { what: 'Check formatting, validate the config', where: 'GitHub Actions' },
        { what: 'Validate Kubernetes manifests', where: 'GitHub Actions' },
        { what: 'Plan the affected project, post the plan', where: 'Atlantis' },
      ],
    },
    {
      when: 'After a comment: atlantis apply',
      rows: [
        { what: 'Full-clone the cloud-init template', where: 'Proxmox VE' },
        { what: 'First boot: Docker, Tailscale, guest agent', where: 'cloud-init' },
        { what: 'Merge by hand; automerge is off', where: 'GitHub' },
      ],
    },
  ],
  result: { what: 'A new VM on the tailnet, from one pull request', where: '1 PR' },
};

export interface Row {
  name: string;
  value: string;
  current?: boolean;
  href?: string;
}

export const record: { group: string; rows: Row[] }[] = [
  {
    group: 'Work',
    rows: [
      { name: 'DevOps Engineer, HP Inc, Pune', value: 'Aug 2022 – Dec 2025' },
      { name: 'DevOps Engineer Intern, HP Inc, Pune', value: 'Mar – Jul 2022' },
    ],
  },
  {
    group: 'Education',
    rows: [
      {
        name: 'MS in Computer Science, Northeastern University, Seattle. GPA 4.0',
        value: 'Jan 2026 – Dec 2027',
        current: true,
      },
      {
        name: 'B.Tech in Information Science Engineering, Presidency University, Bangalore',
        value: '2018 – 2022',
      },
    ],
  },
  {
    group: 'Courses',
    rows: [
      { name: 'Scalable Distributed Systems', value: 'Fall 2026', current: true },
      { name: 'Algorithms', value: 'Fall 2026', current: true },
      { name: 'Fundamentals of Cloud Computing', value: 'Spring 2026, A' },
      { name: 'Programming Design Paradigm', value: 'Spring 2026, A' },
    ],
  },
  {
    group: 'Open source',
    rows: [
      {
        name: 'LinkML: stop gen-sqltables crashing on MSSQL table and column comments',
        value: 'PR #4093, in review',
        href: 'https://github.com/linkml/linkml/pull/4093',
      },
    ],
  },
  {
    group: 'Award',
    rows: [{ name: 'Judges’ Choice Award, Defense Tech Jam Seattle, for ghostline', value: '2026' }],
  },
  {
    group: 'Tools, and where I used them',
    rows: [
      { name: 'AWS: EC2, S3, Lambda, IAM, VPC, EMR, Kinesis, Systems Manager', value: 'HP, self-healing-infra' },
      { name: 'Terraform and Terragrunt', value: 'HP, homelab-infra, self-healing-infra' },
      { name: 'Kubernetes (k3s), Argo CD, Atlantis, Proxmox, Tailscale', value: 'homelab-infra' },
      { name: 'Azure DevOps, GitHub Actions', value: 'HP, project CI' },
      { name: 'Apache Airflow, Redshift, Hive, RDS', value: 'HP' },
      { name: 'CloudWatch, PagerDuty, Prometheus, Grafana', value: 'HP, homelab-infra' },
      { name: 'Python, Bash, TypeScript, SQL', value: 'HP, projects' },
      { name: 'FastAPI, React, SQLite, sentence-transformers', value: 'Daily-Brief, Ebbtide, Cipherlink' },
    ],
  },
];
