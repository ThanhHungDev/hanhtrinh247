Hello <i>{{ $input['name'] }}</i>,
<p>This is a demo email for testing purposes! Also, it's the HTML version.</p>
 
<p><u>Demo object values:</u></p>
 
<div>
<p><b>Demo One:</b>&nbsp;{{ $input['email'] }}</p>
<p><b>Demo Two:</b>&nbsp;{{ $input['mobile'] }}</p>
</div>
<div>
<p><b>Message:</b>&nbsp;{{ $input['message'] }}</p>
</div>

@if(isset($input['theme']) && $input['theme'] )
インターフェースを選択しました：{{ ($input['theme'])->title }}
@endif
 
Thank You,
<br/>
<i>{{ $input['name'] }}</i>