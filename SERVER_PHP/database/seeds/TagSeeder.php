<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tag')->insert(
            [
                [
                    'name'            => 'thiết kế web bán đầm chuyên nghiệp',
                    'slug'             => 'thiet-ke-web-ban-dam',
                    'icon'            => '<i class="hero-icon hero-icon hero-cart-plus"></i>',
                    'excerpt'          => 'mẫu ưeb site bán hàng',
                    'content'          => 'Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'site_name'        => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'image_seo'        => null,
                    'keyword_seo'      => 'mẫu web',
                    'description_seo'  => 'mẫu hậu',
                    'created_at'       => date('Y-m-d H:i:s'),
                    'updated_at'       => date('Y-m-d H:i:s')
                ],
                [
                    'name'            => 'chạy quảng cáo',
                    'slug'             => 'chay-quang-cao',
                    'icon'            => '<i class="hero-icon hero-icon hero-cart-plus"></i>',
                    'excerpt'          => 'mẫu ưeb site bán dâm',
                    'content'          => 'Mẫu website thương mại điện tite thương mại điện tử là trang thông tin điện tử được thiết lập nhằm phục vụ một phần hoặc toàn bộ quá trình hoạt động mua bán hàng hóa cũng như cung ứng dịch vụ. Từ việc trưng bày, giới thiệu hàng hóa, dịch vụ, bán hàng hóa dịch vụ, thanh toán và dịch vụ sau bán hàng. Hay có thể nói một cách đơn giản hơn, Website thương mại điện tử là một loại của website bán hàng.Khi lên kế hoạch thiết kế web thương mại điện tử, bạn cần phải xem xét nhiều yếu tố như thông tin chi tiết sản phẩm, hình ảnh sản phẩm, quá trình thanh toán đơn giản và minh bạch, các bộ lọc sản thích hợp cũng như các tùy chọn tìm kiếm, dịch vụ khách hàng lựa chọn có đáng tin cậy hay không, các phương thức thanh toán, giao diện website được thiết kế có hấp dẫn, thu hút người dùng, thân thiện với người sử dụng. Để làm được điều này quả là điều không hề đơn giản.Đây cũng chính là lý do mà trước khi thiết kế website thương mại điện tử mới hoặc nâng cấp gian hàng trực tuyến hiện tại của mình. Hãy tìm hiểu, tham khảo một số mẫu website thương mại điện tử hấp dẫn để lên những ý tưởng hấp dẫn cho dự án của mình tại Expro Việt Nam.',
                    'site_name'        => 'Mẫu website thương mại điện tử đẹp chuyên nghiệp',
                    'image_seo'        => null,
                    'keyword_seo'      => 'mẫu web',
                    'description_seo'  => 'mẫu hậu',
                    'created_at'       => date('Y-m-d H:i:s'),
                    'updated_at'       => date('Y-m-d H:i:s')
                ]
            ]
        );
    }
}
