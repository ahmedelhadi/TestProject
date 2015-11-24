        <script type="text/javascript">
            $(document).ready(function ($) {
                // delegate calls to data-toggle="lightbox"
                $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
                    event.preventDefault();
                    return $(this).ekkoLightbox({
                        onShown: function() {
                            if (window.console) {
                                return console.log('Checking our the events huh?');
                            }
                        },
                        onNavigate: function(direction, itemIndex) {
                            if (window.console) {
                                return console.log('Navigating '+direction+'. Current item: '+itemIndex);
                            }
                        }
                    });
                });

                //Programatically call
                $('#open-image').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });
                $('#open-youtube').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });

                // navigateTo
                $(document).delegate('*[data-gallery="navigateTo"]', 'click', function(event) {
                    event.preventDefault();
                    return $(this).ekkoLightbox({
                        onShown: function() {

                            var a = this.modal_content.find('.modal-footer a');
                            if(a.length > 0) {

                                a.click(function(e) {

                                    e.preventDefault();
                                    this.navigateTo(2);

                                }.bind(this));

                            }

                        }
                    });
                });


            });
        </script>
        <?php


$display_video = get_option('theme_display_video');
if($display_video == 'true'){
$tour_video_url = get_post_meta($post->ID, 'REAL_HOMES_tour_video_url', true );
$tour_video_image_id = get_post_meta( $post->ID, 'REAL_HOMES_tour_video_image', true );
$tour_video_image_src = wp_get_attachment_image_src($tour_video_image_id,'property-detail-video-image');
$tour_video_image = $tour_video_image_src[0];

    if( !empty($tour_video_image) && !empty($tour_video_url) ) {
        ?>
        <div class="property-video">
            <a href="<?php echo $tour_video_url; ?>"   data-toggle="lightbox" title="Video">
                <div class="play-btn"></div>
                <?php echo '<img src="'.$tour_video_image.'" alt="'.get_the_title($post->ID).'">'; ?>
            </a>
        </div>
        <?php
    }else {
    echo "غير متوفر فيديو لهذا العقار";
}
} 
?>

