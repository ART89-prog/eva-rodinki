$(() => {
	// Есть ли поддержка тач событий или это apple устройство
	if (!is_touch_device() || !/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) $('html').addClass('custom_scroll')



	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')



	// Табы
	// var locationHash = window.location.hash

	// $('body').on('click', '.tabs button', function (e) {
	// 	e.preventDefault()

	// 	if (!$(this).hasClass('active')) {
	// 		const $parent = $(this).closest('.tabs_container'),
	// 			activeTab = $(this).data('content'),
	// 			$activeTabContent = $(activeTab),
	// 			level = $(this).data('level')

	// 		$parent.find('.tabs:first button').removeClass('active')
	// 		$parent.find('.tab_content.' + level).removeClass('active')

	// 		$(this).addClass('active')
	// 		$activeTabContent.addClass('active')
	// 	}
	// })

	// if (locationHash && $('.tabs_container').length) {
	// 	const $activeTab = $('.tabs button[data-content=' + locationHash + ']'),
	// 		$activeTabContent = $(locationHash),
	// 		$parent = $activeTab.closest('.tabs_container'),
	// 		level = $activeTab.data('level')

	// 	$parent.find('.tabs:first button').removeClass('active')
	// 	$parent.find('.tab_content.' + level).removeClass('active')

	// 	$activeTab.addClass('active')
	// 	$activeTabContent.addClass('active')

	// 	$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	// }



})







// Вспомогательные функции
const is_touch_device = () => !!('ontouchstart' in window)


const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}