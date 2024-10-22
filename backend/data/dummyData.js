// data/dummyData.js
const leads = [
  {
    leadId: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-1234",
    company: "Acme Inc.",
    status: "Open",
    source: "Website",
    createdAt: "2023-10-01T08:30:00Z",
    converted: false,
  },
  {
    leadId: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "555-5678",
    company: "Global Corp.",
    status: "Contacted",
    source: "Email Campaign",
    createdAt: "2023-09-25T12:15:00Z",
    converted: false,
  },
  {
    leadId: "3",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "555-8765",
    company: "Tech Solutions",
    status: "Qualified",
    source: "Referral",
    createdAt: "2023-10-10T14:20:00Z",
    converted: true,
  },
];

const campaigns = [
  {
    campaignId: "101",
    name: "Fall 2024 Product Launch",
    type: "Email",
    status: "Active",
    startDate: "2024-09-15",
    endDate: "2024-10-15",
    budget: 10000,
    leadsGenerated: 500,
    leadsConverted: 260,
  },
  {
    campaignId: "102",
    name: "Summer Discount Promotion",
    type: "Social Media",
    status: "Completed",
    startDate: "2024-06-01",
    endDate: "2024-07-31",
    budget: 15000,
    leadsGenerated: 700,
    leadsConverted: 10,
  },
  {
    campaignId: "103",
    name: "Webinar Series - Digital Transformation",
    type: "Webinar",
    status: "Active",
    startDate: "2024-10-01",
    endDate: "2024-10-31",
    budget: 5000,
    leadsGenerated: 300,
    leadsConverted: 20,
  },
];

const contacts = [
  {
    contactId: "1",
    firstName: "David",
    lastName: "Lee",
    email: "david.lee@example.com",
    phone: "555-4321",
    company: "Innovate Tech",
    position: "CTO",
    createdAt: "2023-08-15T11:45:00Z",
  },
  {
    contactId: "2",
    firstName: "Sarah",
    lastName: "Connor",
    email: "sarah.connor@example.com",
    phone: "555-6543",
    company: "Cyberdyne Systems",
    position: "CEO",
    createdAt: "2023-09-01T09:00:00Z",
  },
  {
    contactId: "3",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    phone: "555-8765",
    company: "Global Enterprises",
    position: "Marketing Manager",
    createdAt: "2023-07-30T14:35:00Z",
  },
];

module.exports = { leads, campaigns, contacts };
