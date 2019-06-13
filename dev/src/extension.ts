/*******************************************************************************
 * Copyright (c) 2019 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
"use strict";
import * as vscode from 'vscode';

import clientGenerate from "./commands/GenerateClientCommand";
import serverGenerate from "./commands/GenerateServerCommand";
import htmlGenerate from "./commands/GenerateHtmlCommand";
import Log from './util/Logger';
import translator from './constants/Translator';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	try {
		translator.init();
	} catch (err) {

	}
	Log.setLogFilePath(context);
	context.subscriptions.push(vscode.commands.registerCommand(clientGenerate.id, (selection) => clientGenerate.generate(selection)));
	context.subscriptions.push(vscode.commands.registerCommand(serverGenerate.id, (selection) => serverGenerate.generate(selection)));
	context.subscriptions.push(vscode.commands.registerCommand(htmlGenerate.id, (selection) => htmlGenerate.generate(selection)));
}

// this method is called when your extension is deactivated
export function deactivate() {

}
