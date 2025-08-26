// frontend/mobile-sdk/behavioral-sdk.ts
export interface SDKOptions {
  keystrokeDynamics?: boolean;
  mousePatterns?: boolean;
  touchGestures?: boolean;
  deviceMotion?: boolean;
  biometricVectorGeneration?: boolean;
}

class BehavioralSDK {
  private opts: SDKOptions | null = null;
  initiate(opts: SDKOptions) {
    this.opts = opts;
    console.log("[BehavioralSDK] initiated with", opts);
    // real SDK: start listeners and batching to /ingest
  }
  getStatus() {
    return { initiated: !!this.opts, opts: this.opts };
  }
}

export default new BehavioralSDK();
