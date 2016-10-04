<div ng-app="cleCritique" ng-controller="cleCritiqueController">
  <div class="card-title center-align"><h2 class="thin blue-text">{{ submission.title }}</h2></div>
  <div class="divider"></div>


  <!-- pager
  <div class="col s12">
    <ul class="pagination center">
    <li class="disabled"><a href="#!"><i class="material-icons left">chevron_left</i>Previous</a></li>
    <li><button class="btn btn-flat"><a href="/pipeline/studio"><i class="material-icons">view_module</i></a></li>
    <li class="waves-effect"><a href="#!"><i class="material-icons right">chevron_right</i>Next</a></li>
    </ul>
  </div>
  <div class="divider"></div>
  -->


  <div class="row">
    <div class="col s12 m6">

      <div class="cle_critique__submission" ng-bind-html="submission.rendered.critique"></div>

    </div>
    <div class="col s12 m6">
      <div class="row">
        <ul class="tabs">
          <li class="tab col s6"><a class="active" href="#myfeedback">My Feedback</a></li>
          <li ng-if="critiques" class="tab col s6"><a href="#allfeedback">Critiques</a></li>
        </ul>
        <div id="myfeedback" class="col s12">
          <ul class="collapsible z-depth-0" data-collapsible="accordion">
            <li>
              <div ng-if="assignment.field_cle_crit_criteria" class="collapsible-header"><i class="material-icons">info_outline</i>Directions</div>
              <div class="collapsible-body" ng-bind-html="assignment.field_cle_crit_criteria">
                /* Critique Criteria will be printed here */
              </div>
            </li>
            <li>
              <div class="collapsible-header active"><i class="material-icons">comment</i>Feedback</div>
              <div class="collapsible-body">
                  <div class="input-field col s12">
                    <textarea  ng-model="critique.field_cle_crit_feedback.value" id="icon_prefix2" class="materialize-textarea"></textarea>
                    <label for="icon_prefix2">Write</label>
                  </div>
                  <a ng-click="submitCritique(critique)" class="waves-effect btn-large btn-flat black white-text"><i class="right material-icons">send</i>Submit</a>
              </div>
            </li>
          </ul>
        </div>

        <div id="allfeedback" class="col s12" ng-if="critiques">

          <ul class="collection">
            <li ng-repeat="critique in critiques" class="collection-item">
              <a href="" ng-click="deleteCritique(critique)" class="secondary-content"><i class="material-icons">close</i></a>
              <!-- <span class="title">Title</span> -->
              <div class="cle_critique__author">
                author: {{ critique.author.name }}
              </div>
              <div ng-bind-html="critique.field_cle_crit_feedback.value">
                /* Critique Feedback here */
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>

</div>
