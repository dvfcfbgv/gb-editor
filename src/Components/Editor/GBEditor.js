import React, { Component } from 'react'
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin'
import createImagePlugin from 'draft-js-image-plugin'

import editorStyles from './GBEditor.module.css'
import buttonStyles from './ToolbarStyles/buttonStyles.css'
import toolbarStyles from './ToolbarStyles/toolbarStyles.css'
import {
	ItalicButton,
	BoldButton,
	UnderlineButton,
	CodeButton,
	UnorderedListButton,
	OrderedListButton,
	BlockquoteButton,
	CodeBlockButton
} from 'draft-js-buttons'
import 'draft-js-static-toolbar-plugin/lib/plugin.css'
import HeadlinesButton from './HeadlinesButton/HeadlinesButton'
import ImageButton from './ImageButton/ImageButton'

const toolbarPlugin = createToolbarPlugin({
	theme: { buttonStyles, toolbarStyles }
})
const { Toolbar } = toolbarPlugin
const imagePlugin = createImagePlugin()
const plugins = [toolbarPlugin, imagePlugin]
const text = 'In this editor a toolbar shows up once you select part of the text …'

export default class GBEditor extends Component {
	state = {
		editorState: createEditorStateWithText(text)
	}

	onChange = editorState => {
		this.setState({
			editorState
		})
	}

	focus = () => {
		this.editor.focus()
	}

	render() {
		return (
			<div className={editorStyles.editor} onClick={this.focus}>
				<Editor
					editorState={this.state.editorState}
					onChange={this.onChange}
					plugins={plugins}
					ref={element => {
						this.editor = element
					}}
				/>
				<Toolbar>
					{externalProps => (
						<>
							<BoldButton {...externalProps} />
							<ItalicButton {...externalProps} />
							<UnderlineButton {...externalProps} />
							<CodeButton {...externalProps} />
							<Separator {...externalProps} />
							<HeadlinesButton {...externalProps} />
							<ImageButton {...externalProps} />
							<UnorderedListButton {...externalProps} />
							<OrderedListButton {...externalProps} />
							<BlockquoteButton {...externalProps} />
							<CodeBlockButton {...externalProps} />
						</>
					)}
				</Toolbar>
			</div>
		)
	}
}
