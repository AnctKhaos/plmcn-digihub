import {
  ClipboardList,
  Download,
  FileText,
  HeartPulse,
  Lock,
  Megaphone,
  MessageSquareText,
  ShieldCheck
} from "lucide-react";

export const resources = [
  {
    title: "Locker Rental Agreement Form",
    type: "Form",
    group: "Locker System",
    icon: Lock,
    downloads: 128,
    updated: "June 2026",
    description: "Agreement form for locker assignment, accountability, validity period, and approval."
  },
  {
    title: "Clinical Duty Completion Tracker",
    type: "Tracker",
    group: "Clinical",
    icon: ClipboardList,
    downloads: 221,
    updated: "June 2026",
    description: "Monitoring sheet for completed RLE duties, clinical requirements, and case completion."
  },
  {
    title: "Nursing Research Chapter 1 Template",
    type: "Template",
    group: "Academic",
    icon: FileText,
    downloads: 314,
    updated: "June 2026",
    description: "Standard research template for background, SOP, significance, scope, and definitions."
  },
  {
    title: "Medical Reassessment Requirements",
    type: "Guidelines",
    group: "Health",
    icon: HeartPulse,
    downloads: 174,
    updated: "June 2026",
    description: "Guide for CBC, Urinalysis, Chest X-Ray, photocopy requirements, and UHS process."
  },
  {
    title: "Concern Submission Form",
    type: "Student Services",
    group: "Concerns",
    icon: MessageSquareText,
    downloads: 96,
    updated: "June 2026",
    description: "Submission form for academic, clinical, facilities, administrative, and student affairs concerns."
  },
  {
    title: "CN Announcement Format Guide",
    type: "Manual",
    group: "Information",
    icon: Megaphone,
    downloads: 82,
    updated: "June 2026",
    description: "Standard format guide for official CN memoranda, advisories, and publication captions."
  },
  {
    title: "Student Representation Protocol",
    type: "Framework",
    group: "Governance",
    icon: ShieldCheck,
    downloads: 72,
    updated: "June 2026",
    description: "Framework for receiving, endorsing, resolving, closing, and reporting student concerns."
  },
  {
    title: "Download Center Index",
    type: "Index",
    group: "Resources",
    icon: Download,
    downloads: 65,
    updated: "June 2026",
    description: "Master list of commonly used forms, templates, trackers, and resource links."
  }
];

export const resourceGroups = ["All", "Academic", "Clinical", "Health", "Locker System", "Concerns", "Information", "Governance"];
