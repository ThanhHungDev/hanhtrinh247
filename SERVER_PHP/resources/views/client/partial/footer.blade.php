<div class="component-footer wrapper-footer-page">
	<div class="container head-footer">
		<div class="row">
			<div class="col-12">
				<h3 class="footer-title">
                    {{ SupportDB::getOption('footer-title') }}
					<br>
                    <a class="footer-go-to-chat" href="{{ Route('CHAT') }}">
                        {{ SupportDB::getOption('footer-go-to-chat') }}
                    </a>
                </h3>
                <p class="des-footer">
                    {{ SupportDB::getOption('des-footer') }}
                </p>
            </div>
        </div>
    </div>
    <div class="option-contact">
        <div class="item-advisory">
            <i class="hero-icon hero-message-cog-outline"></i>
            <div class="option-contact-content">
                <h6 class="type">
                    <a href="{{ Route('CHAT', ['slug' => 'consulting-web-design']) }}">
                        {{ SupportDB::getOption('text-link-consulting-web-design') }}
                    </a>
                </h6>
                <a class="link" href="{{ Route('CHAT', ['slug' => 'consulting-web-design']) }}">
                    {{ SupportDB::getOption('footer-go-to-chat') }}
                </a>
            </div>
        </div>
        <div class="item-advisory">
            <i class="hero-icon hero-certificate-outline"></i>
            <div class="option-contact-content">
                <h6 class="type">
                    <a href="{{ Route('CHAT', ['slug' => 'technical-support']) }}">
                        {{ SupportDB::getOption('text-link-advisory-system') }}
                    </a>
                </h6>
                <a class="link" href="{{ Route('CHAT', ['slug' => 'technical-support']) }}">
                    {{ SupportDB::getOption('footer-go-to-chat') }}
                </a>
            </div>
        </div>
        <div class="item-advisory">
            <i class="hero-icon hero-email-edit-outline"></i>
            <div class="option-contact-content">
                <h6 class="type">
                    <a href="{{ Route('CHAT', ['slug' => 'submit-web-request']) }}">
                        {{ SupportDB::getOption('text-link-submit-web-request') }}
                    </a>
                </h6>
                <a class="link" href="{{ Route('CHAT', ['slug' => 'submit-web-request']) }}">
                    {{ SupportDB::getOption('footer-go-to-chat') }}
                </a>
            </div>
        </div>
    </div>
    <div class="component-footer-content ">
        <div class="about-us animated fadeIn">
            <h3 class="title">{{ Config::get('app.text_about_us') }}</h3>
            <p>
                <i class="hero-icon hero-account-group-outline"></i>
                <span>{{ Config::get('app.company_name') }}</span>
            </p>
            <p>
                <i class="hero-icon hero-star-box-multiple-outline"></i>
                <span>{{ Config::get('app.phone_one') }} </span>
            </p>
            <p>
                <i class="hero-icon hero-update"></i>
                <span>{{ Config::get('app.tax_code_date') }}</span>
            </p>
            <p>
                <i class="hero-icon hero-home-map-marker"></i>
                <span>{{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality"), Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }}</span>
            </p>
            <p>
                <i class="hero-icon hero-cellphone-nfc"></i>
                <span>Phone in japan: 
                    <a href="tel:{{ Config::get('app.phone_two') }}">{{ Config::get('app.phone_two') }}</a>
                </span>
            </p>
            <p>
                <i class="hero-icon hero-card-account-mail-outline"></i>
                <span>
                    <a href="mailto:{{ Config::get("app.company_mail") }}">{{ Config::get("app.company_mail") }}</a>
                </span>
            </p>
        </div>
        <div class="service-us animated fadeDown">
            <h3 class="title">{{ Config::get('app.text_my_service') }}</h3>
            {!! SupportDB::getOption('footer-menu-service')!!}
        </div>
        <div id="map-canvas" class="map-us"></div>
    </div>
</div>