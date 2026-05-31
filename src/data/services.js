import { FileText, HeartPulse, LibraryBig, ShieldCheck, Users } from "lucide-react";

export const services = [
  {
    name: "Office of Student Development and Services",
    short: "OSDS",
    icon: Users,
    location: "GCA 104 / GCA 105",
    description:
      "Student development, organizations, activities, student assistance, and student support coordination.",
    actions: ["Organization concerns", "Student activities", "Student assistant documents", "Student clearance"]
  },
  {
    name: "University Health Services",
    short: "UHS",
    icon: HeartPulse,
    location: "UHS Office",
    description:
      "Medical assessment, health clearance, laboratory requests, consultation, and clinical health compliance.",
    actions: ["Medical reassessment", "Laboratory request", "Health consultation", "Clinical clearance"]
  },
  {
    name: "University Learning Center",
    short: "ULC",
    icon: ShieldCheck,
    location: "ULC Office",
    description:
      "Counseling, learning support, student wellness, psychosocial care, and referral assistance.",
    actions: ["Counseling", "Wellness support", "Learning assistance", "Referral"]
  },
  {
    name: "Office of the University Registrar",
    short: "Registrar",
    icon: LibraryBig,
    location: "Registrar's Office",
    description:
      "Student records, enrollment documents, certifications, academic verification, and related requests.",
    actions: ["Certificates", "Enrollment records", "Academic verification", "Student records"]
  },
  {
    name: "Office of the University Treasury",
    short: "Treasury",
    icon: FileText,
    location: "Treasury Office",
    description:
      "Payments, financial clearances, official receipts, refund concerns, and student account matters.",
    actions: ["Payments", "Receipts", "Financial clearance", "Account concerns"]
  }
];
