var gulp = require("gulp");
var html = require("gulp-htmlmin");
var sass = require("gulp-sass");
var notify = require("gulp-notify");
var browserSync = require("browser-sync").create();
var imagemin = require('gulp-imagemin');
var clean = require("gulp-clean");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var usemin = require("gulp-usemin");
var css = require("gulp-cssmin");
var cssmin = require("gulp-cssmin");
var jshint = require("gulp-jshint");
var jshintStylish = require("jshint-stylish");
var autoprexire = require("gulp-autoprefixer");
var less = require("gulp-less");
var scsslint = require("gulp-sass-lint");




// sass
gulp.task('sass', function () {
	return gulp.src('./src/scss/**/*.scss')
	.pipe(sass({outputStyle:"compressed"}))// vai compimir ou mimificar
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/css/'))
	.pipe(browserSync.stream(''))
});

gulp.task('build-js', function () {
	gulp.src(['./src/js/home.js', './src/js/jquery.js', './src/js/produto.js', './src/js/1.js', './src/js/3.js'])
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
	console.log('-----------------------------------------------------------------------');
	console.log('                              JavaScript atualizado com sucesso        ');
	console.log('-----------------------------------------------------------------------');
});

gulp.watch('src/js/*.js').on('change', function (event) {
	gulp.src(event.path)
	.pipe(jshint())
	.pipe(jshint.reporter(jshintStylish));
});

// gulp.watch('src/scss/*.scss').on('change', function (event) {
// 	gulp.src(event.path)
// 	.pipe(scsslint())
// 	.pipe(scsslint.reporter());
// });

gulp.watch('src/less/*.less').on('change', function (event) {
	console.log('compilando arquivos: ' + event.path);
	gulp.src(event.path)
	.pipe(less().on('error', function (error) {
		console.log('problema na compilação');
		console.log(error.message);
	}))
	.pipe(gulp.dest('dist/css'));
	
});

gulp.task('usemin', function () {
	gulp.src('./src/**/*.html')
	.pipe(usemin({
		'js': [uglify],
		'scss': [autoprexire, css]
	}))
	.pipe(gulp.dest('/dist'));
	console.log('-----------------------------------------------------------------------');
	console.log('                        JavaScript e CSS atualizado com sucesso        ');
	console.log('-----------------------------------------------------------------------');
})

// html
gulp.task("html", function () {
	return gulp.src('./src/index.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("checkout", function () {
	return gulp.src('./src/checkout.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("produto", function () {
	return gulp.src('./src/produto.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("sobre", function () {
	return gulp.src('./src/sobre.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("outro", function () {
	return gulp.src('./src/outro.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("outro2", function () {
	return gulp.src('./src/outro2.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("1", function () {
	return gulp.src('./src/1.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("2", function () {
	return gulp.src('./src/2.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("3", function () {
	return gulp.src('./src/3.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("4", function () {
	return gulp.src('./src/4.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("5", function () {
	return gulp.src('./src/5.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("6", function () {
	return gulp.src('./src/6.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("7", function () {
	return gulp.src('./src/7.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

gulp.task("less", function () {
	return gulp.src('./src/less.html')
	.pipe(html({collapseWhitespace:true}))
	.on("error", notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('./dist/'))
	.pipe(browserSync.stream(''))
});

// gulp.task("default",['html','sass'], function(){
	// gulp.watch('./src/index.html', ['html']);
	// gulp.watch('./src/scss/style.scss', ['sass']);
// });

//apagar e repor imagens
gulp.task('imagemin', function () {
return gulp.src('./src/img/**/*')
		// .pipe(imagemin({
		// 	interlaced: true,
		// 	progressive: true,
		// 	optimizationLevel: 5,
		// 	svgoPlugins: [{
		// 		removeViewBox: true
		// 	}],
		// 	verbose: true
		// }))
		.pipe(gulp.dest('./dist/img'))
	// console.log('-----------------------------------------------------------------------');
	// console.log('                              Imagens inseridas com sucess             ');
	// console.log('-----------------------------------------------------------------------');
});

// gulp.task('watch', function() {
//     gulp.watch('./dist/img/**/*.{gif,jpg,png,svg}', ['imagemin']);
// });

gulp.task('clean', ['imagemin'], function () {
	return gulp.src('./dist/img/**/*.{gif,jpg,png,svg}')
	.pipe(clean())
	// console.log('-----------------------------------------------------------------------');
	// console.log('                              Imagens apagadas com sucesso             ');
	// console.log('-----------------------------------------------------------------------');
});
//apagar e repor imagens

// browser Sync
gulp.task('BS',['html','sass', 'checkout', 'produto', 'sobre', 'outro', 'outro2', '1', '2', '3', '4', '5', '6', 'less', '7'], function () {
	browserSync.init({
	server:{
		baseDir: './dist/'
	}	
	})	
	
	gulp.watch('./src/index.html', ['html']);
	gulp.watch('./src/checkout.html', ['checkout']);
	gulp.watch('./src/produto.html', ['produto']);
	gulp.watch('./src/sobre.html', ['sobre']);
	gulp.watch('./src/outro.html', ['outro']);
	gulp.watch('./src/outro2.html', ['outro']);
	gulp.watch('./src/1.html', ['1']);
	gulp.watch('./src/2.html', ['2']);
	gulp.watch('./src/3.html', ['3']);
	gulp.watch('./src/4.html', ['4']);
	gulp.watch('./src/5.html', ['5']);
	gulp.watch('./src/6.html', ['6']);
	gulp.watch('./src/7.html', ['7']);
	gulp.watch('./src/less.html', ['less']);
		gulp.watch('./src/scss/**/*.scss', ['sass']);
	});



	
gulp.task("default",['BS'], function () {
	gulp.start('imagemin', 'usemin');
});	

// gulp.task("default",['BS'], function () {
// 	gulp.start('imagemin', 'build-js');
// });	


//help
// gulp.task('imagemin', ['clean'], function () {
// 	gulp.src('./src/img/**/*')
		  
// 		   .pipe(gulp.dest('./dist/img'))
// 	   console.log('-----------------------------------------------------------------------');
// 	   console.log('                              Imagens inseridas com sucess             ');
// 	   console.log('-----------------------------------------------------------------------');
//    });
   
   
   
//    gulp.task('clean', function () {
// 	   return gulp.src('./dist/img/**/*.{gif,jpg,png,svg}')
// 	   .pipe(clean())
// 	   console.log('-----------------------------------------------------------------------');
// 	   console.log('                              Imagens apagadas com sucesso             ');
// 	   console.log('-----------------------------------------------------------------------');
//    });
   

