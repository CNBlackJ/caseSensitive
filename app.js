const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

router
	.get('/', (ctx, next) => { 
		ctx.body = `root path: ${ctx.req.url}`
	})
	.get('/lowercase', (ctx, next) => { 
		ctx.body = `lowercase path: ${ctx.req.url}`
	})
	.get('/UPPERCASE', (ctx, next) => {
		ctx.body = `uppercase path: ${ctx.req.url}`
	})

// app.use((ctx, next) => {
// 	const path = ctx.req.url
// 	if (path === '/lowercase') {
// 		ctx.body = 'success to request lowercase resource'
// 	} else if (path === '/UPPERCASE') {
// 		ctx.body = 'SUCCESS TO REQUEST UPPERCASE RESOURCE'
// 	} else {
// 		ctx.body = `success to visit: ${path}`
// 	}
// })

app.use(router.routes())
app.listen(3000)