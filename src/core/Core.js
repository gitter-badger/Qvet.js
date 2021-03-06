const version = '0.0.5';

/**
 * Native.
 */
import {
	$AddBookmark, $RemoveBookmark, $EmailBookmark,
	$NewSheetObject,
	$OpenRepository,
	$ShowFields
} from './native/ToolbarActions';

/**
 * Development.
 */
import {$AddBookmarkQva, $RemoveBookmarkQva} from './development/Bookmarks';
import {$OpenRepositoryAjax} from './development/Repository';

/**
 * Addition.
 */
import {EmailBookmark} from './addition/EmailBookmark';
import {SelectListBoxValues} from './addition/SelectListBoxValues';

export class QvetCore {
	
	constructor(){
		this.native = {
			bookmarks:{
				$add: $AddBookmark,
				$remove: $RemoveBookmark,
				$email: $EmailBookmark
			},
			$openRepository: $OpenRepository,
			$showFields: $ShowFields,
			$newSheetObject: $NewSheetObject
		};
		
		// TODO: Dev versions for Qva and $.ajax when toolbar not initialized.
		this.development = {
			bookmarks: {
				$add: $AddBookmarkQva,
				$remove: $RemoveBookmarkQva
			},
			$openRepository: $OpenRepositoryAjax
		};
	}

	getVersion(){
		return console.log('Qvet version: ' + version);
	}

	sendEmailBookmark(config, extraParams){
		return new EmailBookmark(config, extraParams).createBookmark().openEmailWindow();
	}

	selectListBoxValues(listBoxArray, index, afterFn){
		return SelectListBoxValues(listBoxArray, index, afterFn)
	}
}