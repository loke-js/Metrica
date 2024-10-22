
#                                                      METRICA


## CRM & ETL Backend Application

This project is a backend application designed to manage leads, campaigns, and contacts, and to perform ETL (Extract, Transform, Load) processes on this data. It generates reports in both CSV and PDF formats.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Feed Data ]
  - [Generate Reports](#generate-reports)
  - [Fetch Leads Data](#fetch-leads-data)
  - [Fetch Campaigns Data](#fetch-campaigns-data)
- [Usage](#usage)
- [Technologies Used](#technologies-used)


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/crm-etl-backend.git
   cd crm-etl-backend


2. Install Dependencies
```bash
npm install
```

## Environment Variables
Create a `.env` file in the root directory of the project and add the following variables:

```plaintext
PORT=3000
MONGODB_URI=<Your MongoDB Connection String>
EMAIL_USER=<Your Email>
EMAIL_PASS=<Your Email Password>
```



## API Endpoints

### Generate Reports
Generates a report based on the specified type (leads or campaigns). Returns a downloadable file in the specified format.

```
GET /api/report/:reportType
```

**Query Parameters:**
- `format`: Specify the format of the report (`csv` or `pdf`)

**Example Request:**
```bash
GET /api/reports/leads?format=csv
```

### (ETL) Process Data
Initiates the ETL process to extract, transform, and load data.

```
POST /api/etl/run
```


**Response:**
```json
{
    "message": "ETL process completed successfully",
    "leads": {
        "totalLeads": 3,
        "convertedLeads": 1,
        "conversionRate": "33.33"
    },
    "campaigns": [
        {
            "campaignId": "101",
            "name": "Fall 2024 Product Launch",
            "leadsGenerated": 500,
            "leadsConverted": 260,
            "conversionRate": 52
        },//more data   
    ]
}
```
### Add CRM Data
Adds new data to the CRM system.

```
POST /api/crm/add
```

**Request Body:**
```json
{
    "customerName": "John Doe",
    "company": "Acme Inc",
    "email": "john.doe@acme.com",
    "phone": "+1-555-0123",
    "status": "Active",
    "lastContact": "2024-10-22"
}
```

**Response:**
```json
{
    "success": true,
    "message": "CRM data added successfully",
    "data": {
        "id": "12345",
        "customerName": "John Doe",
        "company": "Acme Inc",
        "email": "john.doe@acme.com",
        "phone": "+1-555-0123",
        "status": "Active",
        "lastContact": "2024-10-22",
        "createdAt": "2024-10-22T10:30:00Z"
    }
}
```

### Add Dummy Data
Populates the CRM system with sample data for testing purposes.

```
POST /api/crm/add-dummy
```

**Response:**
```json
{
    "success": true,
    "message": "Dummy data added successfully",
    "data": [
        {
            "id": "12345",
            "customerName": "Sample Customer 1",
            // ... other customer fields
        },
        // ... more customer records
    ]
}
```

### Fetch CRM Data
Retrieves stored CRM data from the system.

```
GET /api/crm/fetch
```

**Response:**
```json
{   
    "success":true,
    "data": [
        {
            "id": "12345",
            "customerName": "John Doe",
            "company": "Acme Inc",
            "email": "john.doe@acme.com",
            "phone": "+1-555-0123",
            "status": "Active",
            "lastContact": "2024-10-22",
            "createdAt": "2024-10-22T10:30:00Z"
        }
        // ... more customer records
    ],
}
```

## Usage

1. Start the server:
```bash
npm start
```

2. Access the API via `http://localhost:3000/api`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- CSV and PDF Generation Libraries
