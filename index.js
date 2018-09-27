var winston = require('winston')
var slackWinston = require('slack-winston').Slack
 
var options = {
  domain: 'kongtech',
  token: 'xoxp-33109398997-378977299475-445367336678-f9e4fb7f381781931ed68af5304671cf',
  webhook_url: 'https://hooks.slack.com/services/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',
  channel: '#winston-test',
  level: 'warn'
}
 
winston.add(slackWinston, options)

for (var i=0;i<1000;i++) {
  winston.log('warn', (i+1) + '번째 메시지')
}
