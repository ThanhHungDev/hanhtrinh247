<?php
namespace App\Libraries;
/**
* TableOfContentGenerator
* 
* Class that scans text content, extract headings (H1-H6) and build menu
* with links connected to headings inside of original content
* 
* @author Truong Thanh Hung <thanhhung.code@gmail.com>
*/
class Catalogue {

    /**
     * function main: generate text to html table ul li 
     *
     * @param  string $text
     * @return object catalogue, text
     */
	public static function generate(string $text) {

		$catalogue = self::buildMenuTree(self::parseHeadings($text));
		$text      = self::addHeadingsIdentifiers($text, $catalogue);
        
		return (object)compact('catalogue', 'text');
    }
    
	private static function parseHeadings(string $text) {

		$headings     = array();
        $raw_headings = self::getHeadings($text);
        
		if(empty($raw_headings)) {
			return $headings;
        }
        
		for ($i = 1; $i <= 6; $i++) {
			$last_index = null;
			foreach($raw_headings as $index => $heading) {
				if(preg_match('/<h'. $i . '.*>([\s\S]*)<\/h' . $i . '>/miU', $heading)) {
					$last_index = $heading;
					$headings[$last_index] = [];
				}
				if($last_index) {
					$next_index = $i + 1;
					if( preg_match('/<h'. $next_index . '.*>([\s\S]*)<\/h' . $next_index . '>/miU', $heading) ) {
						$headings[$last_index][$heading] = [];
					}
				}
			}
        }
        
		foreach(array_reverse($headings) as $heading => $subheadings) {
			foreach($subheadings as $subheading => $items) {
				if(array_key_exists($subheading, $headings)) {
					if(!empty($headings[$subheading])) {
						$headings[$heading][$subheading] = $headings[$subheading];
					}
					unset($headings[$subheading]);
				}
			}
        }
        
		return $headings;
	}
	private static function buildMenuTree(array $headings) {

		$menu_tree = '';
		foreach($headings as $heading => $subheadings) {
			$heading = self::cleanText($heading);
			$id    	 = '#' . self::slug($heading);
			$link	 = '<a href="' . $id . '">' . $heading . '</a>';
			$menu_tree .= '<li>' . $link;
			if(!empty($subheadings)) {
				$menu_tree .= self::buildMenuTree($subheadings);
			}
			$menu_tree .= '</li>';
        }
        
		if(!empty($menu_tree)) {
			$menu_tree = '<ul>' . $menu_tree . '</ul>';
        }
        
		return $menu_tree;
	}
	private static function addHeadingsIdentifiers(string $text, string $menu) {

		foreach(self::getHeadings($text) as $heading) {
			for ($i = 1; $i <= 6; $i++) {
				if(preg_match('/<h' . $i . '/i', $heading) && preg_match('/<\/h' . $i . '>/i', $heading)) {
					$text = str_replace($heading, '<h' . $i . '>' . self::cleanText($heading) . '</h' . $i . '>', $text);
				}
			}
        }
        
		preg_match_all('/<a href="#(.+)">([\s\S]*)<\/a>/miU', $menu, $links);
		for ($i = 0; $i < count($links[2]); $i++) {
			$txt  	= self::cleanText($links[2][$i]);
			$id 	= $links[1][$i];
			$regex	= '/<h(\d)>' . preg_quote($txt, '/') . '<\/h(\d)>/miU';
			$repl	= '<h$1 id="' . $id . '">' . $txt . '</h$1>';
			$text = preg_replace($regex, $repl, $text);
		}
		return $text;
	}
	private static function getHeadings(string $text) {
		$headings = array();
		preg_match_all("/<h\d.*>([\s\S]*)<\/h\d>/miU", $text, $matches);
		foreach($matches[0] as $index => $heading) {
			if(!empty(self::cleanText($heading))) {
				$headings[] = $heading;
			}
		}
		return $headings;
	}
	private static function cleanText(string $text) {
		return trim(strip_tags(str_replace(["\n", "\r", "&nbsp;"], "", $text)));
	}
	private static function slug(string $string) {
		$str = html_entity_decode($string);

		//Đổi ký tự có dấu thành không dấu
        $str = trim(mb_strtolower($str));
        $str = preg_replace('/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/', 'a', $str);
        $str = preg_replace('/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/', 'e', $str);
        $str = preg_replace('/(ì|í|ị|ỉ|ĩ)/', 'i', $str);
        $str = preg_replace('/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/', 'o', $str);
        $str = preg_replace('/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/', 'u', $str);
        $str = preg_replace('/(ỳ|ý|ỵ|ỷ|ỹ)/', 'y', $str);
        $str = preg_replace('/(đ)/', 'd', $str);
        $str = preg_replace('/[^a-z0-9-\s]/', '', $str);
		$str = preg_replace('/([\s]+)/', '-', $str);
		
		return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', strip_tags(html_entity_decode($str)))));
	}
}