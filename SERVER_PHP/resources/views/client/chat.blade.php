

@extends('client.layout.main')

@section('title', 'search theme | ' . Config::get("app.name"))
@section('description', Config::get("app.name"))
@section('keywords', Config::get("app.name"))


@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ Config::get("app.og_description") }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:image" content="{{ Config::get("app.image") }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ Config::get("app.description") }}" />
    <meta name="twitter:title" content="{{ Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ Config::get("app.image") }}" />

@endsection
@section('javascripts')
@php $config =  Config::get('SPA'); @endphp
<script>
    
    
    const CONFIG_APP = {!! json_encode($config, JSON_PRETTY_PRINT) !!};
    const CONFIG_EVENT = {
            "CONNECTTION"     : 'connection',
            "DISCONNECT"      : 'disconnect',
            "SEND_MESSAGE"    : 'send-message',
            "RESPONSE_MESSAGE": 'response-message',
            "JOIN_CHANNEL"    : "join-channel",
            "SEND_TYPING"     : "send-typing",
            "RESPONSE_TYPING" : 'response-typing'
        };
        const CONFIG_EMOJIS =  [
            { symbol: "🤭", sign: ":3" },
            { symbol: "🤣", sign: ":v" },
            { symbol: "🙂", sign: ":)" },
            { symbol: "🙂", sign: "=)" },
            { symbol: "😊", sign: ":^)" },
            { symbol: "😀", sign: ":}" },
            { symbol: "😁", sign: ":o)" },
            { symbol: "😃", sign: ":-D" },
            { symbol: "😄", sign: ":D" },
            { symbol: "😆", sign: "X-D" },
            { symbol: "😍", sign: "B^D" },
            { symbol: "🙁", sign: ":-(" },
            { symbol: "😠", sign: ":(" },
            { symbol: "😡", sign: ":‑<" },
            { symbol: "😞", sign: ":[" },
            { symbol: "😟", sign: ">:[" },
            { symbol: "😣", sign: ":{" },
            { symbol: "😖", sign: ">:(" },
            { symbol: "😢", sign: ":'‑(" },
            { symbol: "😭", sign: ":'(" },
            { symbol: "😂", sign: ":')" },
            { symbol: "😨", sign: "D‑':" },
            { symbol: "😧", sign: "D:<" },
            { symbol: "😦", sign: "D:" },
            { symbol: "😱", sign: "D;" },
            { symbol: "😫", sign: "D=" },
            { symbol: "😩", sign: "DX" },
            { symbol: "😮", sign: ":-0" },
            { symbol: "😯", sign: "8‑0" },
            { symbol: "😲", sign: ">:O" },
            { symbol: "😗", sign: ":-*" },
            { symbol: "😙", sign: ":^*" },
            { symbol: "😚", sign: ":^-" },
            { symbol: "😘", sign: ":x" },
            { symbol: "😍", sign: ":X" },
            { symbol: "😉", sign: ";‑)" },
            { symbol: "😜", sign: "*-)" },
            { symbol: "😘", sign: ";D" },
            { symbol: "😛", sign: ":P" },
            { symbol: "😝", sign: "x‑p" },
            { symbol: "😜", sign: "=p" },
            { symbol: "🤑", sign: ">:P" },
            { symbol: "🤔", sign: ":‑/" },
            { symbol: "😕", sign: ":‑." },
            { symbol: "😟", sign: ":S" },
            { symbol: "😐", sign: ":‑|" },
            { symbol: "😑", sign: ":|" },
            { symbol: "😳", sign: ":$" },
            { symbol: "😞", sign: ":b3" },
            { symbol: "😖", sign: ":‑X" },
            { symbol: "🤐", sign: ":&" },
            { symbol: "😶", sign: "O:‑)" },
            { symbol: "😇", sign: "O:)" },
            { symbol: "👼", sign: "0;^)" },
            { symbol: "😈", sign: ">;3" },
            { symbol: "😎", sign: "|;‑)" },
            { symbol: "😪", sign: "|‑O" },
            { symbol: "😏", sign: ":‑J" },
            { symbol: "😒", sign: "#‑)" },
            { symbol: "😵", sign: "%‑)" },
            { symbol: "😕", sign: "%)" },
            { symbol: "🤒", sign: ":#/" },
            { symbol: "😷", sign: ":D-" },
            { symbol: "🤢", sign: ":cR" },
            { symbol: "🤕", sign: "<:‑/" },
            { symbol: "🤨", sign: ":-l" },
            { symbol: "💝", sign: "<3" }
        ];
</script>
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('chat/js/index.bundle.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('chat/js/vendors~main.index.bundle.js' . Config::get('app.version')) }}"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
    <script src="https://maps.google.com/maps/api/js?key=AIzaSyB-eCEI4wiuaWtUAmSDRZQKYs2roDEBirY"></script>

    

@endsection
@section('content')
<noscript>
    You need to enable JavaScript to run this app.
</noscript>
<div>
    <div id="ROOT" class="position-relative">loading...</div>
</div>
@endsection