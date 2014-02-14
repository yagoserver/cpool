/**
 * Created by Joop on 12-2-14.
 */


/**
* Provide the HTML to create the modal dialog.
*/
(function ($) {
    Drupal.theme.prototype.CPShowCarpoolModal = function () {
        var html = '';
        html += '<div id="ctools-modal" class="popups-box">';
        html += '  <div class="ctools-modal-content ctools-modal-carpool-show">';
        html += '    <span class="popups-close"><a class="close" href="#">' + Drupal.CTools.Modal.currentSettings.closeImage + '</a></span>';
        html += '    <div class="modal-scroll"><div id="modal-content" class="modal-content popups-body"></div></div>';
        html += '  </div>';
        html += '</div>';
        return html;
    }
})(jQuery);
