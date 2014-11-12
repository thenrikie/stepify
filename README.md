stepify
=======
Very simple jquery plugin to split large form or block into steps.

It is simple because there are no css accompany with this plugin and

It will never add any extra dom element after you stepify your block

Usage:
-------
```
$('#id').stepify();
  or
$('#id').stepify(options);
```

Options
-------
The default options
```
{
    // The block element to be shown or hidden
    blockEl : 'section',
    
    // The next button selector
    nextBtn : '.page-next',
    
    // The function to be trigger before going to next step
    // function (currTabIndex)
    nextCheck : null,
    
    backBtn	: '.page-back',
    backCheck : null,
    
    skipBtn : '.page-skip',
    skipCheck : null,
    
    // When first initialized, which tab to show 
    tabShow : 0
    
    // function to hide the block
		hideTranFunc : 'hide',
		// function args
		hideTransitFuncParam : null,
		
		// function to show the block
		showTranFunc : 'show',
		// function args
		showTransitFuncParam : null,
}
```

Example HTML to be stepify
-------
```
<form id="id">
  <section>
      First Section
      <input type="button" value="Next" class="page-next">
  </section>
  <section>
      Second Section
      <input type="button" value="Back" class="page-back">
      <input type="button" value="Next" class="page-next">
  </section>
</form>
```
