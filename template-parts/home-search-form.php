<?php
global $theme_search_fields;
if( !empty($theme_search_fields) ):
?>

<script>
	jQuery(document).ready(function(){
		jQuery('#select-status').val('for-sale');
		jQuery('.searchFormStatuses a').click(function(evt){
			evt.preventDefault();
			jQuery('.searchFormStatuses a').removeClass('active');
			jQuery(this).addClass('active');
			var status = jQuery(this).attr('status');
			jQuery('#select-status').val(status);
		});
	});
</script>

<div class="as-form-wrap">
    <form class="advance-search-form clearfix" action="<?php global $theme_search_url; echo $theme_search_url; ?>" method="get">
		
		<div class="searchFormStatuses">
			<?php if(isset($_REQUEST['status'])){ ?>
			<a href="#" status="for-sale" class="<?php getStatus('for-sale'); ?>">للبيع</a>
			<a href="#" status="for-rent" class="<?php getStatus('for-rent'); ?>">للايجار</a>
			<?php }else{ ?>
			<a href="#" status="for-sale" class="active">للبيع</a>
			<a href="#" status="for-rent">للايجار</a>
			<?php } ?>
		</div>

<div class="searchFormFields">

<?php
    if(in_array('property-id',$theme_search_fields)){
        ?>

        <div class="option-bar large">
            <div class="span2"><label for="property-id-txt"><?php _e('رقم العقار', 'framework'); ?></label></div>
            <div class="span3"><input type="text" name="property-id" id="property-id-txt" value="<?php echo isset($_GET['property-id'])?$_GET['property-id']:''; ?>" placeholder="<?php _e('أكتب رقم العقار', 'framework'); ?>" /></div>
        </div>
        <?php
    }
    if(in_array('location',$theme_search_fields)){
        ?>
        <div class="option-bar large">
            <div class="span2"><label for="select-location"><?php _e('المدينــــــــة', 'framework'); ?></label></div>
            <div class="span3"><span class="selectwrap">
                <select name="location" id="select-location" class="search-select">
                    <?php advance_hierarchical_options('property-city'); ?>
                </select>
            </span></div>
        </div>
        <?php
    }


        if(in_array('type',$theme_search_fields)){
        ?>
        <div class="option-bar large">
            <div class="span2"><label for="select-property-type"><?php _e('نوع العقار', 'framework'); ?></label></div>
            <div class="span3"><span class="selectwrap">
                <select name="type" id="select-property-type" class="search-select">
                    <?php advance_hierarchical_options('property-type'); ?>
                </select>
            </span></div>
        </div>
        
        <?php
    }

    
	?> 

    <div class="option-bar large">
                <div class="span2"><label for="select-area"><?php _e('الإتجاه', 'framework'); ?></label></div>
                <div class="span3">
                    <span class="selectwrap"> 
                        <select name="area" id="select-area" class="search-select">
                            <?php
                            $directions = array("any"=>"اختر","north"=>"شمال","east"=>"الشرق","west"=>"الغرب","south"=>"الجنوب");
                            foreach($directions as $k=>$v){
                                $str = '';
                                if(isset($_REQUEST['area']) && $_REQUEST['area']==strtolower($k)){
                                    $str = 'selected="selected"';
                                }
                                ?>
                                <option value="<?=strtolower($k) ?>" <?=$str ?>><?=$v ?></option>
                                <?php
                            }
                            ?>
                        </select>
                    </span>
                </div>
            </div>



            <div class="option-bar large">
        <div class="span2">
            <br />
            <br />
            <br />
        </div>
        <div class="span3">
</div>
</div>

        <div class="option-bar large">
        <div class="span2">
            <br />
             <br />
           
            <br />
        </div>
        <div class="span3">
</div>
</div>

        <div class="option-bar large">
        <div class="span2"></div>
        <div class="span3">
</div>
</div>
        <div class="option-bar large">
        <div class="span2">
    <div id="left" class="option-bar">
        <input type="submit" value="<?php _e('ابحث', 'framework'); ?>" class=" real-btn btn">
    </div>
        	
        	
        </div>


			<div class="span3">

				<div id="left" class="option-bar large ">
					<a href="http://www.muktasabat.com/realestate_arabic/?page_id=1040" class="adbtn real-btn btn" style=" width: 158px; margin: 0 -20px 0 0; ">بحث متقدم</a>
				</div>
			</div>
		</div>

    </form>
</div>
<?php
endif;
function getStatus($st){
	if($_REQUEST['status']==$st){
		echo 'active';
	}
}
?>