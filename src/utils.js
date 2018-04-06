export function classnames(classes, rules) {
  return Object.keys(rules)
    .reduce((acc, rule) => acc + (rules[rule] ? ' ' + rule : ''), classes)
    .replace(/^\s+|\s+$/g, '')
}

export function range(start, end) {
  const acc = []

  for (let i = start; end - i > 0; i++) {
    acc.push(i)
  }

  return acc
}
