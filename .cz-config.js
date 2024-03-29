module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'style',
      name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
    { value: 'test', name: 'test:     Adding missing tests' },
    {
      value: 'chore',
      name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    },
    { value: 'revert', name: 'revert:   Revert to a commit' },
    { value: 'WIP', name: 'WIP:      Work in progress' },
  ],
  isScopeEmpty: false,
  appendBranchNameToCommitMessage: false,
  allowTicketNumber: true,
  isTicketNumberRequired: true,
  ticketNumberPrefix: '[CTMAR-',
  ticketNumberSufix: ']',
  // Limit ticket number to numbers
  ticketNumberRegExp: '\\d+',
  // Append ticket number to commit message
  appendTicketNumber: true,
  isSubjectEmpty: false,
  questions: {
    subject: {
      required: true, // make required
      minLength: 30, // set min length
    },
  },

  // override the messages, defaults are as follows
  messages: {
    type: 'Select Type:',
    scope: 'Scope of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any JIRA ISSUES CLOSED by this change (optional). E.g.: TEL-1100, TEL-1200:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
    ticketNumber:
      'Enter ticket number (digits only). Prefix "TEL-" will be added automatically:',
  },
  allowBreakingChanges: ['feat', 'fix', 'refactor'],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: '|', // It is supported for fields body and footer.
  footerPrefix: '',
  askForBreakingChangeFirst: true, // default is false
}
