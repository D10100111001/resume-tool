# Resume Generator Tool

### Sample Configuration (configuration/sample.yaml)
```yaml
name: Dev Man
city: San Francisco
state: CA
country: USA
phone: "1373311337"
email: man@dev.com
jobs:
  - company: The Dev Co
    title: Senior Software Engineer
    startDate: 2015-07-17
    accomplishments: 
      - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      - Nibh tortor id aliquet lectus proin. Urna molestie at elementum eu facilisis.
      - Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam.
      - Ac turpis egestas sed tempus urna et pharetra pharetra.
      - Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim.
      - In aliquam sem fringilla ut morbi. Amet venenatis urna cursus eget.
      - Eget arcu dictum varius duis at consectetur lorem.
  - company: We R Developers
    title: Software Developer
    startDate: 2015-06-23
    endDate: 2012-01-05
    accomplishments:
      - Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. 
      - Viverra aliquet eget sit amet. 
      - Ornare suspendisse sed nisi lacus sed. 
      - Tristique sollicitudin nibh sit amet commodo. 
      - Neque viverra justo nec ultrices dui. 
      - Tempus egestas sed sed risus pretium quam vulputate. 
      - Ullamcorper morbi tincidunt ornare massa eget egestas. 
      - Ornare massa eget egestas purus viverra accumsan in nisl nisi. 
      - Nunc faucibus a pellentesque sit amet porttitor. 
tech: [C#, .NET Core, EF, TS, JS, NodeJS, Express, Lucene, Angular, Vue, React, Web API, Mocha, Jasmine, Selenium, Redit, PostgreSQL, SQL Server, Nginx, Serverless, Docker Container, Kubernetes, Azure DevOps, AWS]
education:
  - institution: University of Developers
    graduationDate: 2011-08-23
    gpa:
      value: 3.9
      scale: 4.0
    degree:
      type: Bachelor of Science
      field: Computer Science
certifications:
  - name: Certified ReactJS Developer
    acquisitionDate: 2017-12-01
```

### Sample Template (template/resume.md)
```md
# **{{name}}**
**{{city}}, {{state}}** | **{{#phone-format phone}}{{.}}{{/phone-format}}** | **{{email}}**

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
**{{degree}}** - {{institution}}, {{graduationDate}}, GPA: {{gpa}}
{{/each}}
{{#each certifications}}
**{{name}}** - {{acquisitionDate}}
{{/each}}
```

### Sample Output (out/Dev Man - Senior Software Engineer Resume.md)
```md
# **Dev Man**
**San Francisco, CA** | **(137) 331-1337** | **man@dev.com**

## **Professional Experience**
**The Dev Co** \[Jul 2015 - Present\]
Senior Software Engineer
- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
- Nibh tortor id aliquet lectus proin. Urna molestie at elementum eu facilisis.
- Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam.
- Ac turpis egestas sed tempus urna et pharetra pharetra.
- Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim.
- In aliquam sem fringilla ut morbi. Amet venenatis urna cursus eget.
- Eget arcu dictum varius duis at consectetur lorem.

**We R Developers** \[Jun 2015 - Jan 2012\]
Software Developer
- Viverra orci sagittis eu volutpat odio facilisis mauris sit amet.
- Viverra aliquet eget sit amet.
- Ornare suspendisse sed nisi lacus sed.
- Tristique sollicitudin nibh sit amet commodo.
- Neque viverra justo nec ultrices dui.
- Tempus egestas sed sed risus pretium quam vulputate.
- Ullamcorper morbi tincidunt ornare massa eget egestas.
- Ornare massa eget egestas purus viverra accumsan in nisl nisi.
- Nunc faucibus a pellentesque sit amet porttitor.


## **Tech**
C#, .NET Core, EF, TS, JS, NodeJS, Express, Lucene, Angular, Vue, React, Web API, Mocha, Jasmine, Selenium, Redit, PostgreSQL, SQL Server, Nginx, Serverless, Docker Container, Kubernetes, Azure DevOps, AWS

## **Education and Certifications**
**Bachelor of Science in Computer Science** - University of Developers, Aug 2011, GPA: 3.9/4
**Certified ReactJS Developer** - Nov 2017
```