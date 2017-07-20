import { h } from 'virtual-dom'
import { emojiUrlFor } from 'discourse/lib/text'

export default Ember.Object.create({
  render(widget) {
    this.state = widget.state
    return [this.emoji(), this.count(), this.tooltip()]
  },

  emoji() {
    return h('img.emoji', { src: emojiUrlFor(this.state.emoji), alt: `:${this.state.emoji}:` })
  },

  count() {
    if (this.state.usernames.length < 100) { return }
    return h('span.post-retort-count', this.state.usernames.length.toString())
  },

  tooltip() {
    return h('span.post-retort-tooltip', this.sentence())
  },

  sentence() {
    let usernames = this.state.usernames;
    var text = "";
    var i;
    for (i = 0; i < cars.length; i++) {
        text += `${usernames[i]}` + `, `;
    }
    return text;
  }

})
