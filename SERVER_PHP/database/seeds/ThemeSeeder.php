<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('theme')->insert(
            [
                [
                    'title'           => 'ホームショップ',
                    'slug'            => 'mau-web-cong-ty-trust-growth',
                    'author'          => 'チュン　タン　フン',
                    'excerpt'         => 'チュン　タン　フン チュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フン',
                    'description'     => 'theme đâug tiên test thử ',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'background'      => '/upload/images/theme/homeshop.png',
                    'image_laptop'    => '/upload/images/theme/homeshop.png',
                    'image_tablet'    => '/upload/images/theme/homeshop.png',
                    'image_mobile'    => '/upload/images/theme/homeshop.png',
                    'url'             => 'http://hanhtrinh247.dev.com/theme/1',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'title'           => 'Ebudezain',
                    'slug'            => 'ebudezain',
                    'author'          => 'チュン　タン　フン',
                    'excerpt'         => 'チュン　タン　フン チュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フン',
                    'description'     => 'theme đâug tiên test thử ',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'background'      => '/upload/images/49896530_1162061953964682_6942615214357479424_o.jpg',
                    'image_laptop'    => '/upload/images/theme/myservice.png',
                    'image_tablet'    => '/upload/images/theme/myservice.png',
                    'image_mobile'    => '/upload/images/theme/myservice.png',
                    'url'             => 'http://hanhtrinh247.dev.com',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'title'           => 'kandc',
                    'slug'            => 'mau-web-cong-ty-trust-growth-kandc',
                    'author'          => 'チュン　タン　フン',
                    'excerpt'         => 'チュン　タン　フン チュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フン',
                    'description'     => 'theme đâug tiên test thử ',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'background'      => '/upload/images/theme/kandc.png',
                    'image_laptop'    => '/upload/images/theme/kandc.png',
                    'image_tablet'    => '/upload/images/theme/kandc.png',
                    'image_mobile'    => '/upload/images/theme/kandc.png',
                    'url'             => 'http://hanhtrinh247.dev.com/theme/3',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'title'           => 'trust-growth',
                    'slug'            => 'mau-web-cong-ty-trust-growth-doctor-recruit',
                    'author'          => 'チュン　タン　フン',
                    'excerpt'         => 'チュン　タン　フン チュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フンチュン　タン　フン',
                    'description'     => 'theme đâug tiên test thử ',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'background'      => '/upload/images/theme/doctor-recruit.png',
                    'image_laptop'    => '/upload/images/theme/doctor-recruit.png',
                    'image_tablet'    => '/upload/images/theme/doctor-recruit.png',
                    'image_mobile'    => '/upload/images/theme/doctor-recruit.png',
                    'url'             => 'http://hanhtrinh247.dev.com/theme/4',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'title'           => 'Home Shop',
                    'slug'            => 'mau-web-cong-ty-trust-growth-page-5-465x357',
                    'author'          => 'Trương Thanh Hùng',
                    'excerpt'         => 'チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン',
                    'description'     => 'theme đâug tiên test thử ',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'background'      => '/upload/images/theme/page-5-465x357.jpg',
                    'image_laptop'    => '/upload/images/theme/page-5-465x357.jpg',
                    'image_tablet'    => '/upload/images/theme/page-5-465x357.jpg',
                    'image_mobile'    => '/upload/images/theme/page-5-465x357.jpg',
                    'url'             => 'http://hanhtrinh247.dev.com/theme/5',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'title'           => '建設',
                    'slug'            => 'mau-web-cong-ty-trust-growth-page-6-465x357',
                    'author'          => 'Trương Thanh Hùng',
                    'excerpt'         => 'チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン',
                    'description'     => 'theme đâug tiên test thử ',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'background'      => '/upload/images/theme/page-6-465x357.jpg',
                    'image_laptop'    => '/upload/images/theme/page-6-465x357.jpg',
                    'image_tablet'    => '/upload/images/theme/page-6-465x357.jpg',
                    'image_mobile'    => '/upload/images/theme/page-6-465x357.jpg',
                    'url'             => 'http://hanhtrinh247.dev.com/theme/6',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'title'           => 'フローリング',
                    'slug'            => 'mau-web-cong-ty-trust-growth-page-7-465x357',
                    'author'          => 'Trương Thanh Hùng',
                    'excerpt'         => 'チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン',
                    'description'     => 'theme đâug tiên test thử ',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'background'      => '/upload/images/theme/page-7-465x357.jpg',
                    'image_laptop'    => '/upload/images/theme/page-7-465x357.jpg',
                    'image_tablet'    => '/upload/images/theme/page-7-465x357.jpg',
                    'image_mobile'    => '/upload/images/theme/page-7-465x357.jpg',
                    'url'             => 'http://hanhtrinh247.dev.com/theme/7',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'title'           => 'ホテル',
                    'slug'            => 'mau-web-cong-ty-trust-growth-page-8-465x357',
                    'author'          => 'Trương Thanh Hùng',
                    'excerpt'         => 'チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン',
                    'description'     => 'theme đâug tiên test thử ',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'background'      => '/upload/images/theme/page-8-465x357.jpg',
                    'image_laptop'    => '/upload/images/theme/page-8-465x357.jpg',
                    'image_tablet'    => '/upload/images/theme/page-8-465x357.jpg',
                    'image_mobile'    => '/upload/images/theme/page-8-465x357.jpg',
                    'url'             => 'http://hanhtrinh247.dev.com/theme/8',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
                [
                    'title'           => '構造2',
                    'slug'            => 'mau-web-cong-ty-trust-growth-page-9-465x357',
                    'author'          => 'Trương Thanh Hùng',
                    'excerpt'         => 'チュン　タン　フンTrương Thanh Hùng　タン　フンチュン　タン　フンチュン　タン　フン',
                    'description'     => 'theme đâug tiên test thử ',
                    'content'         => 'Mẫu website thương mại điện tử đẹp chuyên nghiệebsite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'background'      => '/upload/images/theme/page-9-465x357.jpg',
                    'image_laptop'    => '/upload/images/theme/page-9-465x357.jpg',
                    'image_tablet'    => '/upload/images/theme/page-9-465x357.jpg',
                    'image_mobile'    => '/upload/images/theme/page-3-465x357.jpg',
                    'url'             => 'http://hanhtrinh247.dev.com/theme/9',
                    'site_name'       => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'keyword_seo'     => 'mẫu web',
                    'description_seo' => 'mẫu hậu',
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ]
            ]
        );
    }
}
