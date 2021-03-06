module.exports = function message_maker (from) {
  let msg_id = 0
  return function make ({to, type, data = null, refs = {} }) {
      const stack = (new Error().stack.split('\n').slice(2).filter(x => x.trim()))
      return { head: [from, to, msg_id++], refs, type, data, meta: { stack }}
  }
}