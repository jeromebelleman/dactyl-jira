Remove JIRA announcement banner

```javascript
au LocationChange its.example.com/jira -js plugins.jira.rmnotification()
au PageLoad its.example.com/jira -js plugins.jira.rmnotification()
```
