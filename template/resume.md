# **{{name}}**
**{{city}}, {{state}}** | **{{#phone-format phone}}{{.}}{{/phone-format}}** | **{{email}}** | **{{website}}**

## **Professional Experience**
{{#each jobs}}
**{{company}}** \[{{startDate}} - {{endDate}}\]
{{title}}
{{#each accomplishments}}
- {{.}}
{{/each}}

{{/each}}

## **Tech**
{{#list tech}}{{.}}{{/list}}

## **Education and Certifications**
{{#each education}}
**{{degree}}** - {{institution}}, {{graduationDate}}; GPA: {{gpa}}
{{/each}}
{{#each certifications}}
**{{name}}** - {{acquisitionDate}}
{{/each}}