import type { FunctionalComponent } from 'vue'
import { h } from 'vue'
import Markdown from 'markdown-it'

const MarkdownIt: FunctionalComponent<{ tag?: string; content: string }> = (props, ctx) => {
  const md = new Markdown()
  const defaultRender
    = md.renderer.rules.link_open
    || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }
  md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    const aIndex = tokens[idx].attrIndex('target')

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']) // add new attribute
    }
    else {
      // replace value of existing attr
      (tokens[idx].attrs as Array<[string, string]>)[aIndex][1] = '_blank'
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tag, content, ...ọtherAttrs } = ctx.attrs // eslint-disable-line no-unused-vars

  return h(props.tag || 'div', { ...ọtherAttrs, innerHTML: md.render(props.content) })
}

export default MarkdownIt
