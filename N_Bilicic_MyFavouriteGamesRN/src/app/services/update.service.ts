import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private updates: SwUpdate, private snackbar: MatSnackBar) { }

  public init() {
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case "VERSION_DETECTED":
          this.snackbar.open("Updating", "OK");
          break;
        case "VERSION_READY":
          let snackBarRef = this.snackbar.open("You are out of date", "Update");
          snackBarRef.onAction().subscribe(() => {
            this.updates.activateUpdate().then(() => document.location.reload());
          })
          break;
      }
    })
  }
}
