<div class="card-title center-align"><h2 class="thin blue-text">Direct Response</h2></div>
<div class="divider"></div>
<div class="row">
  <div class="col s12 m6">

    <?php print render($form['work-to-critique']); ?>

  </div>
  <div class="col s12 m6">
    <div class="row">
      <ul class="tabs">
        <li class="tab col s6"><a class="active" href="#myfeedback">My Feedback</a></li>
        <li class="tab col s6"><a href="#allfeedback">All</a></li>
      </ul>
      <div id="myfeedback" class="col s12">
        <ul class="collapsible z-depth-0" data-collapsible="accordion">

          <?php if (isset($assignment->field_cle_crit_criteria) && $assignment->field_cle_crit_criteria): ?>
          <li class="cle_critique__directions">
            <div class="collapsible-header"><i class="material-icons">info_outline</i>Directions</div>
            <div class="collapsible-body">
              <?php print $assignment->field_cle_crit_criteria[LANGUAGE_NONE][0]['safe_value']; ?>
            </div>
          </li>
          <?php endif; ?>

          <li>
            <div class="collapsible-header active"><i class="material-icons">comment</i>Feedback</div>
            <div class="collapsible-body">
              <div class="input-field col s12">
                <!--<i class="material-icons prefix">mode_edit</i>-->
                <?php print render($form['field_cle_crit_feedback']); ?>
              </div>
              <?php print drupal_render_children($form['actions']); ?>
            </div>
          </li>
        </ul>
      </div>

      <div id="allfeedback" class="col s12">

        <ul class="collection">
          <li class="collection-item avatar">
            <img src="https://unsplash.it/50?image=230" alt="" class="circle">
            <!-- <span class="title">Title</span> -->
            <p>It should be added that the reductive quality of the purity of line visually and conceptually activates the remarkable handling of ljght.</p>
             <a href="#!" class="secondary-content"><i class="material-icons blue-text">thumb_up</i></a>
          </li>
          <li class="collection-item avatar">
            <img src="https://unsplash.it/50?image=400" alt="" class="circle">
           <!--  <span class="title">Title</span> -->
            <p>Although I am not a painter, I think that the reductive quality of the Egyptian motifs contextualize a participation in the critical dialogue of the 90s.</p>
            <a href="#!" class="secondary-content"><i class="material-icons grey-text">thumb_up</i></a>
          </li>
          <li class="collection-item avatar">
            <img src="https://unsplash.it/50?image=500" alt="" class="circle">
            <!-- <span class="title">Title</span> -->
            <p>I'm troubled by how the metaphorical resonance of the purity of line notates the essentially transitional quality.</p>
             <a href="#!" class="secondary-content"><i class="material-icons grey-text">thumb_up</i></a>
          </li>
          <li class="collection-item avatar">
            <img src="https://unsplash.it/50?image=100" alt="" class="circle">
            <!-- <span class="title">Title</span> -->
            <p>Although I am not a painter, I think that the iconicity of the purity of line visually and conceptually activates the distinctive formal juxtapositions.</p>
             <a href="#!" class="secondary-content"><i class="material-icons grey-text">thumb_up</i></a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</div>

<?php print drupal_render_children($form); ?>
