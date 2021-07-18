$(function(i) {
	function t(t) {
		this.options = {
				container: "slider",
				imgs: [],
				link: [],
				duration: "normal",
				delay: 2e3,
				direction: "left",
				auto: !0,
				arrows: !0,
				width: 824,
				height: 300
			}, this.options = i.extend(this.options, t), this.time = null, this.nowIndex = 0, this.liWidth = this.options.width,
			this.itemNum = this.options.imgs.length, this.id = this.options.container, this.init()
	}
	t.prototype.init = function() {
		this.createDom(), this.bindEvent(), this.autoMove()
	}, t.prototype.createDom = function() {
		for (var t = this, s = this.options.imgs, n = this.options.link, e = i("<ul class='" + this.id + "-ul'></ul>"), o =
				"", l = i("<div class='" + this.id + "-circlex'><ul class='" + this.id + "-circlex-ul'></ul></div>"), h = "", d =
				0; d < s.length; d++) {
			var a = 0 === d ? "active" : "";
			o += "<li style='width: " + t.liWidth + "px;' class='" + this.id + "-ul-li'><a class='" + this.id +
				"-ul-li-a' href='" + n[d] + "'><img class='" + this.id + "-ul-li-a-img' src='" + s[d] + "'></a></li>", d === s.length -
				1 && (o += "<li class='" + this.id + "-ul-li'><a class='" + this.id + "-ul-li-a' href='" + n[0] +
					"'><img class='" + this.id + "-ul-li-a-img' src='" + s[0] + "'></a></li>"), h += "<li class='" + this.id +
				"-circlex-ul-li " + a + "'></li>"
		}
		var c = "<a class='" + this.id + "-btn-prev'><span class='" + this.id + "-btn-prev-span'></span></a>",
			r = "<a class='" + this.id + "-btn-next'><span class='" + this.id + "-btn-next-span'></span></a>",
			u = i("<div class='" + this.id + "-btn hide'>" + c + r + "</div>");
		e.append(o), l.children().append(h), i("#" + this.id).css({
			width: t.options.width,
			height: t.options.height
		}), i("#" + this.id).append(e).append(l).append(u)
	}, t.prototype.changeStyle = function() {
		i("." + this.id + "-circlex-ul-li.active").removeClass("active"), this.nowIndex === this.itemNum ? i("." + this.id +
			"-circlex-ul-li").eq(0).addClass("active") : i("." + this.id + "-circlex-ul-li").eq(this.nowIndex).addClass(
			"active")
	}, t.prototype.move = function(t) {
		"left" === t ? (this.nowIndex === this.itemNum && (this.nowIndex = 0, i("." + this.id + "-ul").css("left", 0)),
				this.nowIndex++) : "right" === t ? (0 === this.nowIndex && (this.nowIndex = this.itemNum, i("." + this.id +
				"-ul").css("left", -this.nowIndex * this.liWidth + "px")), this.nowIndex--) : this.nowIndex = t, this.changeStyle(),
			this.slider()
	}, t.prototype.autoMove = function() {
		var i = this;
		this.options.auto && (clearTimeout(i.time), i.time = setTimeout((function() {
			i.move(i.options.direction)
		}), i.options.delay))
	}, t.prototype.slider = function() {
		var t = this;
		i("." + this.id + "-ul").stop().animate({
			left: -t.nowIndex * t.liWidth + "px"
// 			left: "900px"
		}, t.options.duration, (function() {
			t.autoMove(t.options.direction)
		}))
	}, t.prototype.bindEvent = function() {
		var t = this;
		i("." + this.id + "-circlex-ul-li").on("click", (function() {
			i(this).addClass("active").siblings().removeClass("active"), t.move(i(this).index())
		})), i("." + this.id + "-btn-prev").on("click", (function() {
			t.move("right")
		})), i("." + this.id + "-btn-next").on("click", (function() {
			t.move("left")
		})), t.options.arrows && i("#" + this.id).on("mouseenter", (function() {
			i(this).find("." + this.id + "-btn").removeClass("hide")
		})).on("mouseleave", (function() {
			i(this).find("." + this.id + "-btn").addClass("hide")
		}))
	}, i.fn.extend({
		sliderImg: function(i) {
			new t(i)
		}
	})
}(jQuery));
