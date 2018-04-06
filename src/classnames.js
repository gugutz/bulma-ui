export default function classnames(classes, rules) {
  return Object.keys(rules)
    .reduce((acc, rule) => acc + (rules[rule] ? ' ' + rule : ''), classes)
    .replace(/^\s+|\s+$/g, '')
}
