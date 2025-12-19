import 'package:flutter/foundation.dart';
import '../models/pending_action.dart';

abstract class AIService {
  List<PendingAction> get pendingActions;
  VoidCallback? onNewApproval;

  Future<String> chat(String userMessage);
  Future<void> executeAction(String actionId);
  void rejectAction(String actionId);
  void clearHistory();
}
