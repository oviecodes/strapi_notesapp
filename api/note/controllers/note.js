'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async addEditors(ctx) {
		const { editorEmail, noteAuthor } = ctx.request.body;
		const id = ctx.params.id;
		const locals = {
			email: editorEmail,
			id,
			author: noteAuthor
		};
		strapi.services.note
			.send(editorEmail, 'addEditors', locals)
			.then((res) => console.log(res.originalMessage))
			.catch((err) => console.log(err));

		ctx.send({
			ok: true
		});
		console.log(ctx.request.body);
	},

	async requestEditAccess(ctx) {
		const { noteAuthor, userEmail } = ctx.request.body;
		const id = ctx.params.id;
		const locals = {
			email: userEmail,
			id,
			author: noteAuthor
		};
		strapi.services.note
			.send(noteAuthor, 'requestAccess', locals)
			.then((res) => console.log(res.originalMessage))
			.catch((err) => console.log(err));

		ctx.send({
			ok: true
		});
	},

	async shareLink(ctx) {
		console.log(ctx.request.body);
		const { sharer, recievers } = ctx.request.body;
		const id = ctx.params.id;
		const locals = {
			id,
			sharer
		};
		recievers.forEach((reciever) => {
			locals.reciever = reciever;

			strapi.services.note
				.send(reciever, 'shareLink', locals)
				.then((res) => console.log(res.originalMessage))
				.catch((err) => console.log(err));

			ctx.send({
				ok: true
			});
		});
	}
};
